import { StateSchema } from 'app/providers/StoreProvider';
import { Employee } from 'entities/Employee';
import { getEmployeeData } from './getEmployeeData';

describe('getEmployeeData', () => {
    test('get employee', () => {
        const data: Employee = {
            id: 1,
            firstName: 'Roman',
            lastName: 'Severov',
        };

        const state: DeepPartial<StateSchema> = {
            editableEmployeeCard: {
                employee: data,
            },
        };

        expect(getEmployeeData(state as StateSchema)).toEqual(data);
    });

    test('not data', () => {
        const state: DeepPartial<StateSchema> = {
            editableEmployeeCard: {},
        };

        expect(getEmployeeData(state as StateSchema)).toEqual(undefined);
    });
});
