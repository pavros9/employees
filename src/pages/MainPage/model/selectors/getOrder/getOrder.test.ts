import { StateSchema } from 'app/providers/StoreProvider';
import { getOrder } from './getOrder';

describe('getOrder', () => {
    test('get order asc', () => {
        const state: DeepPartial<StateSchema> = {
            mainPage: {
                order: 'asc',
            },
        };
        expect(getOrder(state as StateSchema)).toEqual('asc');
    });

    test('get order desc', () => {
        const state: DeepPartial<StateSchema> = {
            mainPage: {
                order: 'desc',
            },
        };
        expect(getOrder(state as StateSchema)).toEqual('desc');
    });
});
