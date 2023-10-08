import { StateSchema } from 'app/providers/StoreProvider';

export const getEmployeeData = (state: StateSchema) =>
    state.editableEmployeeCard.employee;
