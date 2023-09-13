import { StateSchema } from 'app/providers/StoreProvider';

export const getOrder = (state: StateSchema) => state.mainPage.order;
