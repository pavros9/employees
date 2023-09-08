import { Employee, EmployeeJobTitle } from 'entities/Employee';

export interface MainPageSchema {
    employees: {
        items?: Employee[];
        selectedItems?: Employee[];
    };
    isLoading: boolean;
    type: EmployeeJobTitle;
}
