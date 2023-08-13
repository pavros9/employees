import { AxiosInstance } from 'axios';
import { EmployeeSchema } from 'entities/Employee';
import { AddEmployeeFormSchema } from 'features/addEmployeeForm/model/types/addEmployeeForm';
import { EmployeeCardSchema } from 'features/editableEmployeeCard';

export interface StateSchema {
    employee: EmployeeSchema;
    addEmployeeForm: AddEmployeeFormSchema;
    editableEmployeeCard: EmployeeCardSchema;
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
