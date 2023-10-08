import { Employee, EmployeeSortField } from 'entities/Employee';
import { sortEmployyesBySort } from './sortEmployeesBySort';

describe('sortEmployeesBySort', () => {
    const employees: Employee[] = [
        { birthday: '26.10.2022', firstName: 'Dmitriy' },
        { birthday: '01.11.2020', firstName: 'Roman' },
        { birthday: '06.02.1994', firstName: 'Oleg' },
    ];

    test('sort employees by created asc', () => {
        expect(
            sortEmployyesBySort(employees, 'asc', EmployeeSortField.CREATED),
        ).toEqual([
            { birthday: '06.02.1994', firstName: 'Oleg' },
            { birthday: '01.11.2020', firstName: 'Roman' },
            { birthday: '26.10.2022', firstName: 'Dmitriy' },
        ]);
    });

    test('sort employees by created desc', () => {
        expect(
            sortEmployyesBySort(employees, 'desc', EmployeeSortField.CREATED),
        ).toEqual([
            { birthday: '26.10.2022', firstName: 'Dmitriy' },
            { birthday: '01.11.2020', firstName: 'Roman' },
            { birthday: '06.02.1994', firstName: 'Oleg' },
        ]);
    });

    test('sort employees by name asc', () => {
        expect(
            sortEmployyesBySort(employees, 'asc', EmployeeSortField.NAME),
        ).toEqual([
            { birthday: '26.10.2022', firstName: 'Dmitriy' },
            { birthday: '06.02.1994', firstName: 'Oleg' },
            { birthday: '01.11.2020', firstName: 'Roman' },
        ]);
    });

    test('sort employees by name desc', () => {
        expect(
            sortEmployyesBySort(employees, 'desc', EmployeeSortField.NAME),
        ).toEqual([
            { birthday: '01.11.2020', firstName: 'Roman' },
            { birthday: '06.02.1994', firstName: 'Oleg' },
            { birthday: '26.10.2022', firstName: 'Dmitriy' },
        ]);
    });

    test('sort employees with one employees', () => {
        expect(
            sortEmployyesBySort(
                [{ birthday: '01.11.2020', firstName: 'Roman' }],
                'asc',
                EmployeeSortField.CREATED,
            ),
        ).toEqual([{ birthday: '01.11.2020', firstName: 'Roman' }]);
    });

    test('sort employees with empty array employees', () => {
        expect(
            sortEmployyesBySort([], 'asc', EmployeeSortField.CREATED),
        ).toEqual([]);
    });
});
