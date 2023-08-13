import { useParams } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useEffect } from 'react';
import { fetchEmployeeById } from 'entities/Employee';
import { EditableEmployeeCard } from 'features/editableEmployeeCard';

const EmployeeDetailsPage = () => {
    const { id } = useParams();

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchEmployeeById(id));
    }, [dispatch]);

    return (
        <div className="max-w-screen-xl px-6 py-16 mx-auto sm:px-6 lg:px-4">
            <EditableEmployeeCard />
        </div>
    );
};

export default EmployeeDetailsPage;
