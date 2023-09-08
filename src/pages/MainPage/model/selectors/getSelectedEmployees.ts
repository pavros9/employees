import { StateSchema } from 'app/providers/StoreProvider';

export const getSelectedEmployees = (state: StateSchema) =>
    state.mainpage.employees.selectedItems;
