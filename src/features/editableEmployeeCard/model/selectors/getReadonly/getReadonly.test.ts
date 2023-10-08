import { StateSchema } from 'app/providers/StoreProvider';
import { getReadonly } from './getReadonly';

describe('getReadonly', () => {
    test('readOnly is true', () => {
        const state: DeepPartial<StateSchema> = {
            editableEmployeeCard: {
                readonly: true,
            },
        };

        expect(getReadonly(state as StateSchema)).toEqual(true);
    });

    test('readOnly is false', () => {
        const state: DeepPartial<StateSchema> = {
            editableEmployeeCard: {
                readonly: false,
            },
        };

        expect(getReadonly(state as StateSchema)).toEqual(false);
    });
});
