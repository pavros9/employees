import { StateSchema } from 'app/providers/StoreProvider';

export const getSelectedEmployees = (state: StateSchema) =>
    state.mainPage.employees.selectedItems;
