import { EmployeeJobTitle } from 'entities/Employee';
import { EmployeeFilterSelector } from 'features/EmployeeFilterSelector';
import { getSelectedEmployees } from 'pages/MainPage/model/selectors/getSelectedEmployees';
import { getTypeEmployeeSelector } from 'pages/MainPage/model/selectors/getTypeEmployee';
import { mainPageActions } from 'pages/MainPage/model/slice/mainPage';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

export const MainPageFilter = () => {
    const dispatch = useAppDispatch();
    const type = useSelector(getTypeEmployeeSelector);

    const onChangeType = (type: EmployeeJobTitle) => {
        dispatch(mainPageActions.setType(type));
    };

    return (
        <>
            <div className="px-[120px]">
                <div className="mb-3">Должность</div>

                <EmployeeFilterSelector
                    className="max-w-[300px]"
                    type={type}
                    onChangeType={onChangeType}
                />
            </div>
        </>
    );
};
