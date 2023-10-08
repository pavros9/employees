import { StateSchema } from 'app/providers/StoreProvider';
import { getNotifications } from './getNotifications';

describe('getNotifications', () => {
    test('get data', () => {
        const data = [{ type: 'error', message: 'Error' }];
        const state: DeepPartial<StateSchema> = {
            notification: {
                items: data,
            },
        };

        expect(getNotifications(state as StateSchema)).toEqual(data);
    });

    test('not data', () => {
        const state: DeepPartial<StateSchema> = {
            notification: {
                items: [],
            },
        };

        expect(getNotifications(state as StateSchema)).toEqual([]);
    });
});
