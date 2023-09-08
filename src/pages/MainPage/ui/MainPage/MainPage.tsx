import {
    fetchEmployees,
    getEmployeesData,
    getIsLoading,
} from 'entities/Employee';
import { EmployeesList } from 'entities/Employee/ui/EmployeesList/EmployeesList';
import { DeleteEmployee } from 'features/deleteEmployee';
import { getSelectedEmployees } from 'pages/MainPage/model/selectors/getSelectedEmployees';
import { getTypeEmployeeSelector } from 'pages/MainPage/model/selectors/getTypeEmployee';
import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { LoaderPage } from 'shared/ui/LoaderPage/LoaderPage';
import { Pagination } from 'shared/ui/Pagination/Pagination';
import { MainPageFilter } from '../MainPageFilter/MainPageFilter';

const MainPage = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState<
        undefined | number
    >(undefined);
    const [currentPage, setCurrentPage] = useState(1);

    const dispatch = useAppDispatch();

    const employees = useSelector(getEmployeesData);
    const selectedEmployees = useSelector(getSelectedEmployees);
    const typeEmployeeSelector = useSelector(getTypeEmployeeSelector);
    const isLoading = useSelector(getIsLoading);

    const PageSize = 10;

    useEffect(() => {
        dispatch(fetchEmployees());
    }, [dispatch]);

    useEffect(() => {
        setCurrentPage(1);
    }, [typeEmployeeSelector]);

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;

        return selectedEmployees?.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, selectedEmployees]);

    const onOpenModal = (id: number) => {
        setIsOpenModal(true);
        setSelectedEmployee(id);
    };

    return (
        <div className="max-w-screen-xl px-6 py-16 mx-auto sm:px-6 lg:px-4">
            <h3 className="text-3xl text-center mb-5 font-bold">
                Список работников
            </h3>
            {isLoading ? (
                <LoaderPage />
            ) : (
                <>
                    <MainPageFilter />
                    {selectedEmployees && (
                        <>
                            <EmployeesList
                                openModal={onOpenModal}
                                employees={currentTableData}
                            />
                            <Pagination
                                className="pagination-bar"
                                currentPage={currentPage}
                                totalCount={selectedEmployees.length}
                                pageSize={PageSize}
                                onPageChange={(page) => setCurrentPage(page)}
                            />
                        </>
                    )}
                </>
            )}
            {isOpenModal && (
                <DeleteEmployee
                    selectedEmployee={selectedEmployee}
                    closeModal={setIsOpenModal}
                    isOpenModal={isOpenModal}
                />
            )}
        </div>
    );
};

export default MainPage;
