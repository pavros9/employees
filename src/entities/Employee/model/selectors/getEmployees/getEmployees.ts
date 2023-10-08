import { StateSchema } from 'app/providers/StoreProvider';

export const getEmployeesData = (state: StateSchema) => state.employee?.data;
