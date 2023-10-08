import { StateSchema } from 'app/providers/StoreProvider';

import { getSort } from './getSort';

import { EmployeeSortField } from 'entities/Employee';

describe('getSort', () => {
    test('sort by created', () => {
        const state: DeepPartial<StateSchema> = {
            mainPage: {
                sort: EmployeeSortField.CREATED,
            },
        };
        expect(getSort(state as StateSchema)).toEqual('createdAt');
    });

    test('sort by name', () => {
        const state: DeepPartial<StateSchema> = {
            mainPage: {
                sort: EmployeeSortField.NAME,
            },
        };
        expect(getSort(state as StateSchema)).toEqual('name');
    });
});
