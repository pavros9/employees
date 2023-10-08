import { StateSchema } from 'app/providers/StoreProvider';

export const getTypeEmployeeSelector = (state: StateSchema) =>
    state.mainPage.type;
