import { StateSchema } from 'app/providers/StoreProvider';
import { EmployeeJobTitle } from 'entities/Employee';
import { getTypeEmployeeSelector } from './getTypeEmployee';

describe('getTypeEmployeeSelector', () => {
    test('filter by all', () => {
        const state: DeepPartial<StateSchema> = {
            mainPage: {
                type: EmployeeJobTitle.ALL,
            },
        };
        expect(getTypeEmployeeSelector(state as StateSchema)).toEqual('all');
    });

    test('filter by cook', () => {
        const state: DeepPartial<StateSchema> = {
            mainPage: {
                type: EmployeeJobTitle.COOK,
            },
        };
        expect(getTypeEmployeeSelector(state as StateSchema)).toEqual('cook');
    });

    test('filter by driver', () => {
        const state: DeepPartial<StateSchema> = {
            mainPage: {
                type: EmployeeJobTitle.DRIVER,
            },
        };
        expect(getTypeEmployeeSelector(state as StateSchema)).toEqual('driver');
    });

    test('filter by waiter', () => {
        const state: DeepPartial<StateSchema> = {
            mainPage: {
                type: EmployeeJobTitle.WAITER,
            },
        };
        expect(getTypeEmployeeSelector(state as StateSchema)).toEqual('waiter');
    });
});
