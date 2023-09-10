import { Employee } from 'entities/Employee';
import { ValidateEmployeeCardError } from '../const/const';

export interface EmployeeCardSchema {
    employee?: Employee;
    form?: Employee;
    readonly: boolean;
    isLoading: boolean;
    validateErrors?: ValidateEmployeeCardError[];
}
