import { fetchEmployees, getEmployeesData } from 'entities/Employee';
import { EmployeesList } from 'entities/Employee/ui/EmployeesList/EmployeesList';
import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Pagination } from 'shared/ui/Pagination/Pagination';

const MainPage = () => {
    const dispatch = useAppDispatch();
    const employees = useSelector(getEmployeesData);
    const PageSize = 10;
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        dispatch(fetchEmployees());
    }, [dispatch]);

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;

        return employees?.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, employees]);

    return (
        <div className="max-w-screen-xl px-6 py-16 mx-auto sm:px-6 lg:px-4">
            <h3 className="text-3xl text-center mb-5 font-bold">
                Список работников
            </h3>
            <EmployeesList employees={currentTableData} />
            {employees && (
                <Pagination
                    className="pagination-bar"
                    currentPage={currentPage}
                    totalCount={employees.length}
                    pageSize={PageSize}
                    onPageChange={(page) => setCurrentPage(page)}
                />
            )}
        </div>
    );
};

export default MainPage;
