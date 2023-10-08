import { StateSchema } from 'app/providers/StoreProvider';
import { getTime } from './getTime';

describe('getTime', () => {
    test('get time', () => {
        const state: DeepPartial<StateSchema> = {
            notification: {
                time: 5000,
            },
        };

        expect(getTime(state as StateSchema)).toEqual(5000);
    });

    test('not data', () => {
        const state: DeepPartial<StateSchema> = {
            notification: {},
        };

        expect(getTime(state as StateSchema)).toEqual(undefined);
    });
});
