import { StateSchema } from 'app/providers/StoreProvider';
import { Employee } from 'entities/Employee';
import { getSelectedEmployees } from './getSelectedEmployees';

describe('getSelectedEmployees', () => {
    test('get selected employees', () => {
        const data: Employee[] = [
            { id: 1, firstName: 'Roman' },
            { id: 2, firstName: 'Vasya' },
        ];

        const state: DeepPartial<StateSchema> = {
            mainPage: {
                employees: {
                    selectedItems: data,
                },
            },
        };
        expect(getSelectedEmployees(state as StateSchema)).toEqual(data);
    });

    test('empty array', () => {
        const state: DeepPartial<StateSchema> = {
            mainPage: {
                employees: {
                    selectedItems: [],
                },
            },
        };
        expect(getSelectedEmployees(state as StateSchema)).toEqual([]);
    });
});
