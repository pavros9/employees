import { StateSchema } from 'app/providers/StoreProvider';

export const getSort = (state: StateSchema) => state.mainPage.sort;
