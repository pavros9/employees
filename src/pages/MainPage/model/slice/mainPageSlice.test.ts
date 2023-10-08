import { EmployeeJobTitle, EmployeeSortField } from 'entities/Employee';
import { MainPageSchema } from '../types/MainPageSchema';
import { mainPageActions, mainPageReducer } from './mainPage';

const items = [
    {
        id: 1,
        firstName: 'Roman',
        birthday: '26.10.2022',
        role: EmployeeJobTitle.COOK,
    },
    {
        id: 3,
        firstName: 'Artem',
        birthday: '12.01.1996',
        role: EmployeeJobTitle.DRIVER,
    },
    {
        id: 2,
        firstName: 'Vasya',
        birthday: '01.02.2020',
        role: EmployeeJobTitle.WAITER,
    },
];
const state: DeepPartial<MainPageSchema> = {
    employees: {
        selectedItems: items,
        items: items,
    },
    isLoading: false,
    order: 'desc',
    sort: EmployeeSortField.CREATED,
    type: EmployeeJobTitle.ALL,
};

describe('mainPageSlice.test', () => {
    test('init employees', () => {
        const data = {
            employees: {
                selectedItems: [
                    {
                        id: 1,
                        firstName: 'Roman',
                        birthday: '26.10.2022',
                        role: EmployeeJobTitle.COOK,
                    },
                    {
                        id: 2,
                        firstName: 'Vasya',
                        birthday: '01.02.2020',
                        role: EmployeeJobTitle.WAITER,
                    },
                    {
                        id: 3,
                        firstName: 'Artem',
                        birthday: '12.01.1996',
                        role: EmployeeJobTitle.DRIVER,
                    },
                ],
                items: items,
            },
            isLoading: false,
            order: 'desc',
            sort: EmployeeSortField.CREATED,
            type: EmployeeJobTitle.ALL,
        };

        expect(
            mainPageReducer(
                state as MainPageSchema,
                mainPageActions.initEmployees(),
            ),
        ).toEqual(data);
    });

    test('set type cook', () => {
        const data = {
            employees: {
                selectedItems: [
                    {
                        id: 1,
                        firstName: 'Roman',
                        birthday: '26.10.2022',
                        role: EmployeeJobTitle.COOK,
                    },
                ],
                items: items,
            },
            isLoading: false,
            order: 'desc',
            sort: EmployeeSortField.CREATED,
            type: EmployeeJobTitle.COOK,
        };

        expect(
            mainPageReducer(
                state as MainPageSchema,
                mainPageActions.setType(EmployeeJobTitle.COOK),
            ),
        ).toEqual(data);
    });

    test('set type waiter', () => {
        const data = {
            employees: {
                selectedItems: [
                    {
                        id: 2,
                        firstName: 'Vasya',
                        birthday: '01.02.2020',
                        role: EmployeeJobTitle.WAITER,
                    },
                ],
                items: items,
            },
            isLoading: false,
            order: 'desc',
            sort: EmployeeSortField.CREATED,
            type: EmployeeJobTitle.WAITER,
        };

        expect(
            mainPageReducer(
                state as MainPageSchema,
                mainPageActions.setType(EmployeeJobTitle.WAITER),
            ),
        ).toEqual(data);
    });

    test('set type driver', () => {
        const data = {
            employees: {
                selectedItems: [
                    {
                        id: 3,
                        firstName: 'Artem',
                        birthday: '12.01.1996',
                        role: EmployeeJobTitle.DRIVER,
                    },
                ],
                items: items,
            },
            isLoading: false,
            order: 'desc',
            sort: EmployeeSortField.CREATED,
            type: EmployeeJobTitle.DRIVER,
        };

        expect(
            mainPageReducer(
                state as MainPageSchema,
                mainPageActions.setType(EmployeeJobTitle.DRIVER),
            ),
        ).toEqual(data);
    });

    test('set sort name', () => {
        const data = {
            employees: {
                selectedItems: [
                    {
                        id: 2,
                        firstName: 'Vasya',
                        birthday: '01.02.2020',
                        role: EmployeeJobTitle.WAITER,
                    },
                    {
                        id: 1,
                        firstName: 'Roman',
                        birthday: '26.10.2022',
                        role: EmployeeJobTitle.COOK,
                    },
                    {
                        id: 3,
                        firstName: 'Artem',
                        birthday: '12.01.1996',
                        role: EmployeeJobTitle.DRIVER,
                    },
                ],
                items: items,
            },
            isLoading: false,
            order: 'desc',
            sort: EmployeeSortField.NAME,
            type: EmployeeJobTitle.ALL,
        };

        expect(
            mainPageReducer(
                state as MainPageSchema,
                mainPageActions.setSort(EmployeeSortField.NAME),
            ),
        ).toEqual(data);
    });

    test('set sort birthday', () => {
        const data = {
            employees: {
                selectedItems: [
                    {
                        id: 1,
                        firstName: 'Roman',
                        birthday: '26.10.2022',
                        role: EmployeeJobTitle.COOK,
                    },
                    {
                        id: 2,
                        firstName: 'Vasya',
                        birthday: '01.02.2020',
                        role: EmployeeJobTitle.WAITER,
                    },
                    {
                        id: 3,
                        firstName: 'Artem',
                        birthday: '12.01.1996',
                        role: EmployeeJobTitle.DRIVER,
                    },
                ],
                items: items,
            },
            isLoading: false,
            order: 'desc',
            sort: EmployeeSortField.CREATED,
            type: EmployeeJobTitle.ALL,
        };

        expect(
            mainPageReducer(
                state as MainPageSchema,
                mainPageActions.setSort(EmployeeSortField.CREATED),
            ),
        ).toEqual(data);
    });

    test('set order acs', () => {
        const data = {
            employees: {
                selectedItems: [
                    {
                        id: 3,
                        firstName: 'Artem',
                        birthday: '12.01.1996',
                        role: EmployeeJobTitle.DRIVER,
                    },
                    {
                        id: 2,
                        firstName: 'Vasya',
                        birthday: '01.02.2020',
                        role: EmployeeJobTitle.WAITER,
                    },
                    {
                        id: 1,
                        firstName: 'Roman',
                        birthday: '26.10.2022',
                        role: EmployeeJobTitle.COOK,
                    },
                ],
                items: items,
            },
            isLoading: false,
            order: 'asc',
            sort: EmployeeSortField.CREATED,
            type: EmployeeJobTitle.ALL,
        };

        expect(
            mainPageReducer(
                state as MainPageSchema,
                mainPageActions.setOrder('asc'),
            ),
        ).toEqual(data);
    });

    test('set order desc', () => {
        const data = {
            employees: {
                selectedItems: [
                    {
                        id: 1,
                        firstName: 'Roman',
                        birthday: '26.10.2022',
                        role: EmployeeJobTitle.COOK,
                    },
                    {
                        id: 2,
                        firstName: 'Vasya',
                        birthday: '01.02.2020',
                        role: EmployeeJobTitle.WAITER,
                    },
                    {
                        id: 3,
                        firstName: 'Artem',
                        birthday: '12.01.1996',
                        role: EmployeeJobTitle.DRIVER,
                    },
                ],
                items: items,
            },
            isLoading: false,
            order: 'desc',
            sort: EmployeeSortField.CREATED,
            type: EmployeeJobTitle.ALL,
        };

        expect(
            mainPageReducer(
                state as MainPageSchema,
                mainPageActions.setOrder('desc'),
            ),
        ).toEqual(data);
    });
});
