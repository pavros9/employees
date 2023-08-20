import { JobTitle } from '../types/employee';

export enum EmployeeJobTitle {
    DRIVER = 'driver',
    WAITER = 'waiter',
    COOK = 'cook',
}

export const EmployeeJobTitleTranslation: Record<JobTitle, string> = {
    [EmployeeJobTitle.DRIVER]: 'Водитель',
    [EmployeeJobTitle.WAITER]: 'Официант',
    [EmployeeJobTitle.COOK]: 'Повар',
};