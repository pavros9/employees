import { EmployeeJobTitle, EmployeeSortField } from 'entities/Employee';
import { EmployeeFilterSelector } from 'features/EmployeeFilterSelector';
import { EmployeeSortSelector } from 'features/EmployeeSortSelector';
import { getOrder } from '../../model/selectors/getOrder/getOrder';
import { getSort } from '../../model/selectors/getSort/getSort';
import { getSelectedEmployees } from 'pages/MainPage/model/selectors/getSelectedEmployees/getSelectedEmployees';
import { getTypeEmployeeSelector } from 'pages/MainPage/model/selectors/getTypeEmployee/getTypeEmployee';
import { mainPageActions } from 'pages/MainPage/model/slice/mainPage';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { SortOrder } from 'shared/types/sort';
import { useEffect } from 'react';

export const MainPageFilter = () => {
    const dispatch = useAppDispatch();
    const type = useSelector(getTypeEmployeeSelector);

    const order = useSelector(getOrder);
    const sort = useSelector(getSort);

    const onChangeType = (type: EmployeeJobTitle) => {
        dispatch(mainPageActions.setType(type));
    };

    const onChangeSort = (sort: EmployeeSortField) => {
        dispatch(mainPageActions.setSort(sort));
    };

    const onChangeOrder = (order: SortOrder) => {
        dispatch(mainPageActions.setOrder(order));
    };

    return (
        <>
            <div className="sm:px-[120px]">
                <div className="mb-3">Должность</div>

                <EmployeeFilterSelector
                    className="max-w-[300px] mb-7"
                    type={type}
                    onChangeType={onChangeType}
                />
                <EmployeeSortSelector
                    onChangeSort={onChangeSort}
                    onChangeOrder={onChangeOrder}
                    order={order}
                    sort={sort}
                />
            </div>
        </>
    );
};
