import { AxiosInstance } from 'axios';
import { EmployeeSchema } from 'entities/Employee';
import { AddEmployeeFormSchema } from 'features/addEmployeeForm/model/types/addEmployeeForm';

export interface StateSchema {
    employee: EmployeeSchema;
    addEmployeeForm: AddEmployeeFormSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}