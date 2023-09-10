import { JobTitle } from '../types/employee';

export enum EmployeeJobTitle {
    DRIVER = 'driver',
    WAITER = 'waiter',
    COOK = 'cook',
    ALL = 'all',
}

export const EmployeeJobTitleTranslation: Record<JobTitle, string> = {
    [EmployeeJobTitle.DRIVER]: 'Водитель',
    [EmployeeJobTitle.WAITER]: 'Официант',
    [EmployeeJobTitle.COOK]: 'Повар',
};

export enum EmployeeSortField {
    NAME = 'name',
    CREATED = 'createdAt',
}
