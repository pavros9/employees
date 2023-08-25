import { AxiosInstance } from 'axios';
import { EmployeeSchema } from 'entities/Employee';
import { NotificationSchema } from 'entities/Notification';
import { EmployeeCardSchema } from 'features/editableEmployeeCard';

export interface StateSchema {
    employee: EmployeeSchema;
    editableEmployeeCard: EmployeeCardSchema;
    notification: NotificationSchema;
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
