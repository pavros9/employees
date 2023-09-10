import {
    Employee,
    EmployeeJobTitle,
    EmployeeSortField,
} from 'entities/Employee';
import { SortOrder } from 'shared/types/sort';

export interface MainPageSchema {
    employees: {
        items?: Employee[];
        selectedItems?: Employee[];
    };
    isLoading: boolean;
    type: EmployeeJobTitle;
    sort: EmployeeSortField;
    order: SortOrder;
}
