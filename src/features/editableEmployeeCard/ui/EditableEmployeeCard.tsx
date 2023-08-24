import {
    EmployeeJobTitle,
    EmployeeJobTitleTranslation,
} from 'entities/Employee';
import { useSelector } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { reformateDate } from 'shared/lib/reformateDate/reformateDate';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { employeeCardActions } from '../model/slice/employeeCardSlice';
import InputMask from 'react-input-mask';
import Edit from 'shared/assets/icons/edit.png';
import { updateEmployee } from '../model/services/updateEmployee';
import { getIsLoading } from '../model/selectors/getIsLoading';
import { useParams } from 'react-router-dom';
import { fetchEmployeeById } from 'entities/Employee';
import { addEmployee } from '../model/services/addEmployee';
import { LoaderPage } from 'shared/ui/LoaderPage/LoaderPage';
import { Button } from 'shared/ui/Button/Button';
import { getReadonly } from '../model/selectors/getReadonly';
import { classNames } from 'shared/lib/classNames/classNames';

import ru from 'date-fns/locale/ru';
import { getEmployeeForm } from '../model/selectors/getEmployeeForm';
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
    const employee = useSelector(getEmployeeForm);
    const isLoading = useSelector(getIsLoading);
    const readOnly = useSelector(getReadonly);

    useEffect(() => {
        if (id) {
            dispatch(employeeCardActions.closeEditingForm());
            dispatch(fetchEmployeeById(id));
        } else {
            dispatch(employeeCardActions.editForm());
        }
        return () => {
            dispatch(employeeCardActions.initEmployee());
        };
    }, [dispatch, id]);

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

    const onSentEmployee = () => {
        dispatch(employeeCardActions.closeEditingForm());

        if (id) {
            dispatch(updateEmployee());
        } else {
            dispatch(addEmployee());
        }
    };

    const selectedDate = employee?.birthday
        ? new Date(reformateDate(employee.birthday))
        : new Date();

    const editForm = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        dispatch(employeeCardActions.editForm());
    };

    const closeEditingForm = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    ) => {
        e.preventDefault();
        dispatch(employeeCardActions.cancelEditing());
    };

    return isLoading ? (
        <LoaderPage />
    ) : (
        <form className="w-full max-w-lg mx-auto">
            <div className="flex flex-wrap mb-6">
                <div className="w-full">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs mb-2">
                        <div className="mb-3 font-medium">Имя</div>
                        <input
                            onChange={(e) => onChangeFirstName(e.target.value)}
                            disabled={readOnly}
                            value={employee?.firstName || ''}
                            className={classNames(
                                'appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500',
                                { 'bg-gray-200': !readOnly },
                                [],
                            )}
                            type="text"
                        />
                    </label>
                </div>
            </div>
            <div className="flex flex-wrap mb-6">
                <div className="w-full">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs mb-2">
                        <div className="mb-3 font-medium">Фамилия</div>
                        <input
                            onChange={(e) => onChangeLastName(e.target.value)}
                            disabled={readOnly}
                            value={employee?.lastName || ''}
                            className={classNames(
                                'appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500',
                                { 'bg-gray-200': !readOnly },
                                [],
                            )}
                            type="text"
                        />
                    </label>
                </div>
            </div>

            <div className="mb-6">
                <div className="w-full">
                    <label className="block mb-2 text-base">
                        <div className="mb-3 font-medium">Роль</div>
                        <select
                            value={employee?.role}
                            disabled={readOnly}
                            onChange={(e) => onChangeRole(e.target.value)}
                            className={classNames(
                                'block w-full px-4 py-3 text-base text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500',
                                { 'bg-gray-200': !readOnly },
                                [],
                            )}
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
                    </label>
                </div>
            </div>
            <div className="flex flex-wrap mb-6">
                <div className="">
                    <label className="flex flex-col text-base">
                        <div className="mb-3 font-medium">Дата рождения</div>
                        <DatePicker
                            selected={selectedDate}
                            locale={'ru'}
                            disabled={readOnly}
                            wrapperClassName=""
                            className={classNames(
                                'appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500',
                                { 'bg-gray-200': !readOnly },
                                [],
                            )}
                            onChange={(date) => onChangeBirthday(date)}
                        />
                    </label>
                </div>
            </div>

            <div className="flex flex-wrap mb-6">
                <div className="w-full">
                    <label className="block text-base ">
                        <div className="mb-3 font-medium">Телефон</div>
                        <InputMask
                            value={employee?.phone || ''}
                            mask="+7(999) 999 9999"
                            disabled={readOnly}
                            onChange={(e) => onChangePhone(e.target.value)}
                            className={classNames(
                                'appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500',
                                { 'bg-gray-200': !readOnly },
                                [],
                            )}
                        />
                    </label>
                </div>
            </div>
            <div className="md:flex md:items-center justify-center">
                {!readOnly && (
                    <>
                        <button
                            className="shadow bg-teal-400 mr-5 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                            type="button"
                            onClick={() => onSentEmployee()}
                        >
                            Сохранить
                        </button>
                        {id && (
                            <button onClick={closeEditingForm} className="px-5">
                                Отмена
                            </button>
                        )}
                    </>
                )}

                {readOnly && (
                    <Button
                        onClick={editForm}
                        text={'Изменить'}
                        icon={Edit}
                        className="px-5"
                    />
                )}
            </div>
        </form>
    );
};
