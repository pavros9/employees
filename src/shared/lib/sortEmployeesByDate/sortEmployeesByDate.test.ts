import { Employee } from 'entities/Employee';
import { sortEmployeesByDate } from './sortEmployeesByDate';

describe('sortEmployeesByDate', () => {
    const employees: Employee[] = [
        { birthday: '26.10.2022', firstName: 'Dmitriy' },
        { birthday: '01.11.2020', firstName: 'Roman' },
    ];

    test('sort employees asc', () => {
        expect(sortEmployeesByDate(employees, 'asc')).toEqual([
            { birthday: '01.11.2020', firstName: 'Roman' },
            { birthday: '26.10.2022', firstName: 'Dmitriy' },
        ]);
    });

    test('sort employees desc', () => {
        expect(sortEmployeesByDate(employees, 'desc')).toEqual([
            { birthday: '26.10.2022', firstName: 'Dmitriy' },
            { birthday: '01.11.2020', firstName: 'Roman' },
        ]);
    });

    test('if not birthday (asc)', () => {
        const employeesWithoutBirthday: Employee[] = [
            { firstName: 'Dmitriy' },
            { firstName: 'Roman' },
        ];

        expect(sortEmployeesByDate(employeesWithoutBirthday, 'asc')).toEqual([
            { firstName: 'Dmitriy' },
            { firstName: 'Roman' },
        ]);
    });

    test('if not birthday (desc)', () => {
        const employeesWithoutBirthday: Employee[] = [
            { firstName: 'Dmitriy' },
            { firstName: 'Roman' },
        ];

        expect(sortEmployeesByDate(employeesWithoutBirthday, 'desc')).toEqual([
            { firstName: 'Dmitriy' },
            { firstName: 'Roman' },
        ]);
    });
});
