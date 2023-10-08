import { StateSchema } from 'app/providers/StoreProvider';
import { getIsLoading } from './getIsLoading';

describe('getIsLoading', () => {
    test('isLoading is true', () => {
        const state: DeepPartial<StateSchema> = {
            editableEmployeeCard: {
                isLoading: true,
            },
        };

        expect(getIsLoading(state as StateSchema)).toEqual(true);
    });

    test('isLoading is false', () => {
        const state: DeepPartial<StateSchema> = {
            editableEmployeeCard: {
                isLoading: false,
            },
        };

        expect(getIsLoading(state as StateSchema)).toEqual(false);
    });
});
