import { StateSchema } from 'app/providers/StoreProvider';
import { ValidateEmployeeCardError } from '../../const/const';
import { getValidateErrors } from './getValidateErrors';

describe('getValidateErrors', () => {
    test('get errors', () => {
        const data: ValidateEmployeeCardError[] = [
            ValidateEmployeeCardError.INCORRECT_FIRST_NAME,
        ];

        const state: DeepPartial<StateSchema> = {
            editableEmployeeCard: {
                validateErrors: data,
            },
        };

        expect(getValidateErrors(state as StateSchema)).toEqual(data);
    });

    test('empty array', () => {
        const state: DeepPartial<StateSchema> = {
            editableEmployeeCard: {
                validateErrors: [],
            },
        };

        expect(getValidateErrors(state as StateSchema)).toEqual([]);
    });
});

//ValidateEmployeeCardError
