import { AxiosInstance } from 'axios';
import { EmployeeSchema } from 'entities/Employee';
import { EmployeeCardSchema } from 'features/editableEmployeeCard';

export interface StateSchema {
    employee: EmployeeSchema;
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
