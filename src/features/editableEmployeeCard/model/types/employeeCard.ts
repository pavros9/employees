import { Employee } from 'entities/Employee';

export interface EmployeeCardSchema {
    employee?: Employee;
    readonly: boolean;
    isLoading: boolean;
}
