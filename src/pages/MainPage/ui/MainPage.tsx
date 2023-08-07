import { fetchEmployees, getEmployeesData } from 'entities/Employee';
import { EmployeesList } from 'entities/Employee/ui/EmployeesList/EmployeesList';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

const MainPage = () => {
    const dispatch = useAppDispatch();
    const employees = useSelector(getEmployeesData);

    useEffect(() => {
        dispatch(fetchEmployees());
    }, [dispatch]);
    return (
        <div className="max-w-screen-xl px-6 py-16 mx-auto sm:px-6 lg:px-4">
            <h3 className="text-3xl text-center mb-5 font-bold">
                Список работников
            </h3>
            <EmployeesList employees={employees} />
        </div>
    );
};

export default MainPage;
