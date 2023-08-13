import {
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
    const employee = useSelector(getEmployeeData);
    const dispatch = useAppDispatch();
    const fullName = employee?.name && employee.name.split(' ');

    const [name, setName] = useState(fullName?.[0]);
    const [surName, setSurName] = useState(fullName?.[1]);

    useEffect(() => {
        setName(fullName?.[0]);
        setSurName(fullName?.[1]);
    }, [employee?.name]);

    const [startDate, setStartDate] = useState<Date | undefined>(new Date());

    const onChangeName = useCallback(
        (name?: string, surName?: string) => {
            setName(name);
            dispatch(
                employeeCardActions.updateEmployee({
                    name: `${name} ${surName}` || '',
                }),
            );
        },
        [dispatch],
    );

    const onChangeSurname = useCallback(
        (surname?: string, name?: string) => {
            setSurName(surname);
            dispatch(
                employeeCardActions.updateEmployee({
                    name: `${name} ${surname}` || '',
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
            console.log(value?.toLocaleDateString('en'));

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

    const onSent = () => {
        dispatch(updateEmployee());
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
                        onChange={(e) => onChangeName(e.target.value, surName)}
                        value={name}
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
                        onChange={(e) => onChangeSurname(e.target.value, name)}
                        value={surName}
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
                        defaultValue={employee?.role}
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
                        value={employee?.phone}
                        mask="+7(999) 999 9999"
                        onChange={(e) => onChangePhone(e.target.value)}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    />
                </div>
            </div>
            <div className="md:flex md:items-center">
                <div className="md:w-1/3">
                    <button
                        className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                        type="button"
                        onClick={onSent}
                    >
                        Отправить
                    </button>
                </div>
                <div className="md:w-2/3"></div>
            </div>
        </form>
    );
};
