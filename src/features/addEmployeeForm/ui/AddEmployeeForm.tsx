import { ChangeEvent, useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { addEmployeeFormActions } from 'features/addEmployeeForm';
import { getEmployeeForm } from 'features/addEmployeeForm/model/selectors/addEmployeeFormSelectors';
import { useSelector } from 'react-redux';

export const AddEmployeeForm = () => {
    const dispatch = useAppDispatch();
    const onNameChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            dispatch(addEmployeeFormActions.setName(event.target.value));
        },
        [dispatch],
    );

    const employee = useSelector(getEmployeeForm);

    const onSurnameChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            dispatch(addEmployeeFormActions.setSurname(event.target.value));
        },
        [dispatch],
    );

    const onAddEmployee = () => {
        console.log(employee);
        dispatch(addEmployeeFormActions.setName(''));
        dispatch(addEmployeeFormActions.setSurname(''));
    };
    return (
        <div className=" flex justify-center items-center">
            <div className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
                <h1 className="text-3xl font-bold text-center mb-11 cursor-pointer">
                    Новый работник
                </h1>
                <div className="space-y-4">
                    <input
                        type="text"
                        placeholder="Имя"
                        value={employee.name}
                        onChange={onNameChange}
                        className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                    />
                    <input
                        type="text"
                        placeholder="Фамилия"
                        value={employee.surname}
                        onChange={onSurnameChange}
                        className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                    />
                </div>
                <div className="text-center mt-6">
                    <button
                        className="py-3 w-64 text-xl text-white bg-purple-400 rounded-2xl"
                        onClick={onAddEmployee}
                    >
                        Добавить
                    </button>
                </div>
            </div>
        </div>
    );
};
