import { Employee } from 'entities/Employee';

export interface EmployeeCardSchema {
    employee?: Employee;
    form?: Employee;
    readonly: boolean;
    isLoading: boolean;
}
