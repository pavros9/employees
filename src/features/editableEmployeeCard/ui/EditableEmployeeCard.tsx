import {
    Employee,
    EmployeeJobTitle,
    EmployeeJobTitleTranslation,
} from 'entities/Employee';
import { useSelector } from 'react-redux';
import { getEmployeeData } from '../model/selectors/getEmployeeData';
import { useCallback, useEffect, useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { reformateDate } from 'shared/lib/reformateDate/reformateDate';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { employeeCardActions } from '../model/slice/employeeCardSlice';
import InputMask from 'react-input-mask';

import ru from 'date-fns/locale/ru';
import { updateEmployee } from '../model/services/updateEmployee';
import { getIsLoading } from '../model/selectors/getIsLoading';
import { useParams } from 'react-router-dom';
import { fetchEmployeeById } from 'entities/Employee';
import { addEmployee } from '../model/services/addEmployee';
registerLocale('ru', ru);

const RoleSelectOptions = [
    {
        value: EmployeeJobTitle.WAITER,
        content: EmployeeJobTitleTranslation[EmployeeJobTitle.WAITER],
    },
    {
        value: EmployeeJobTitle.COOK,
        content: EmployeeJobTitleTranslation[EmployeeJobTitle.COOK],
    },
    {
        value: EmployeeJobTitle.DRIVER,
        content: EmployeeJobTitleTranslation[EmployeeJobTitle.DRIVER],
    },
];

export const EditableEmployeeCard = () => {
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const employee = useSelector(getEmployeeData);
    const isLoading = useSelector(getIsLoading);

    useEffect(() => {
        if (id) {
            dispatch(fetchEmployeeById(id));
            console.log(employee);
        }
        return () => {
            dispatch(employeeCardActions.initEmployee());
        };
    }, [dispatch, id]);

    if (isLoading) {
        return <div>Загрузка</div>;
    }

    const onChangeFirstName = useCallback(
        (firstName?: string) => {
            dispatch(
                employeeCardActions.updateEmployee({
                    firstName: firstName || '',
                }),
            );
        },
        [dispatch],
    );

    const onChangeLastName = useCallback(
        (lastName?: string) => {
            dispatch(
                employeeCardActions.updateEmployee({
                    lastName: lastName || '',
                }),
            );
        },
        [dispatch],
    );

    const onChangeRole = useCallback(
        (value?: string) => {
            dispatch(
                employeeCardActions.updateEmployee({
                    role: value || '',
                }),
            );
        },
        [dispatch],
    );

    const onChangeBirthday = useCallback(
        (value: Date | null) => {
            dispatch(
                employeeCardActions.updateEmployee({
                    birthday: value?.toLocaleDateString('ru') || '',
                }),
            );
        },
        [dispatch],
    );

    const onChangePhone = useCallback(
        (value: string) => {
            dispatch(
                employeeCardActions.updateEmployee({
                    phone: value || '',
                }),
            );
        },
        [dispatch],
    );

    const onSent = (employee?: Employee) => {
        if (id) {
            dispatch(updateEmployee());
        } else {
            dispatch(addEmployee());
        }
    };

    const selectedDate = employee?.birthday
        ? new Date(reformateDate(employee.birthday))
        : new Date();

    return (
        <form className="w-full max-w-lg mx-auto">
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                    >
                        Имя
                    </label>
                    <input
                        onChange={(e) => onChangeFirstName(e.target.value)}
                        value={employee?.firstName || ''}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="nick"
                        type="text"
                    />
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                    >
                        Фамилия
                    </label>
                    <input
                        onChange={(e) => onChangeLastName(e.target.value)}
                        value={employee?.lastName || ''}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="nick"
                        type="text"
                    />
                </div>
            </div>

            <div className="-mx-3 mb-6">
                <div className="w-full px-3">
                    <label
                        htmlFor="role"
                        className="block mb-2 text-base font-medium "
                    >
                        Роль
                    </label>
                    <select
                        id="role"
                        value={employee?.role}
                        onChange={(e) => onChangeRole(e.target.value)}
                        className="block w-full px-4 py-3 text-base  bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    >
                        {RoleSelectOptions.map((role) => (
                            <option
                                className="cursor-pointer text-l"
                                key={role.content}
                                value={role.value}
                            >
                                {role.content}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="-mx-3 mb-6">
                <div className="w-full px-3">
                    <label className="block mb-2 text-base font-medium">
                        Дата рождения
                    </label>
                    <DatePicker
                        selected={selectedDate}
                        locale={'ru'}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        onChange={(date) => onChangeBirthday(date)}
                    />
                </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                    >
                        Телефон
                    </label>
                    <InputMask
                        value={employee?.phone || ''}
                        mask="+7(999) 999 9999"
                        onChange={(e) => onChangePhone(e.target.value)}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    />
                </div>
            </div>
            <div className="md:flex md:items-center justify-center">
                <button
                    className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    type="button"
                    onClick={() => onSent(employee)}
                >
                    Сохранить
                </button>
            </div>
        </form>
    );
};
