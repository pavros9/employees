import { StateSchema } from 'app/providers/StoreProvider';

export const getTime = (state: StateSchema) => state.notification.time;
