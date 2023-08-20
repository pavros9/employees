import { getEmployeeData } from 'features/editableEmployeeCard/model/selectors/getEmployeeData';
import {
    EditableEmployeeCard,
    employeeCardActions,
} from 'features/editableEmployeeCard';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

const FormAddingPage = () => {
    return (
        <div className="pt-11">
            <h3 className="text-3xl text-center mb-11 font-bold">
                Добавление работника
            </h3>
            <EditableEmployeeCard />
        </div>
    );
};

export default FormAddingPage;
