import { StateSchema } from 'app/providers/StoreProvider';
import { getEmployeesData } from './getEmployees';
import { Employee } from '../../types/employee';

describe('getEmployeesData', () => {
    test('not data', () => {
        const state: DeepPartial<StateSchema> = {
            employee: {},
        };
        expect(getEmployeesData(state as StateSchema)).toEqual(undefined);
    });

    test('should return data', () => {
        const data: Employee[] = [
            { id: 1, firstName: 'Roman' },
            { id: 2, firstName: 'Vasya' },
        ];
        const state: DeepPartial<StateSchema> = {
            employee: {
                data,
            },
        };
        expect(getEmployeesData(state as StateSchema)).toEqual(data);
    });
});
