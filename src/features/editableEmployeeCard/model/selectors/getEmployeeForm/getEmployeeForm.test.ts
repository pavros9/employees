import { StateSchema } from 'app/providers/StoreProvider';
import { Employee } from 'entities/Employee';
import { getEmployeeForm } from './getEmployeeForm';

describe('getEmployeeForm', () => {
    test('get employee', () => {
        const data: Employee = {
            id: 1,
            firstName: 'Roman',
            lastName: 'Severov',
        };

        const state: DeepPartial<StateSchema> = {
            editableEmployeeCard: {
                form: data,
            },
        };

        expect(getEmployeeForm(state as StateSchema)).toEqual(data);
    });

    test('not data', () => {
        const state: DeepPartial<StateSchema> = {
            editableEmployeeCard: {},
        };

        expect(getEmployeeForm(state as StateSchema)).toEqual(undefined);
    });
});
