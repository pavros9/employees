import { EmployeeSchema } from '../types/employeeSchema';
import { employeeActions, employeeReducer } from './employeeSlice';

describe('employeeSlice.test', () => {
    test('add employee', () => {
        const data = [
            {
                id: 1,
                firstName: 'Misha',
            },
            {
                id: 2,
                firstName: 'Oleg',
            },
        ];
        const state: EmployeeSchema = {
            isLoading: false,
            data,
        };

        expect(
            employeeReducer(
                state as EmployeeSchema,
                employeeActions.addEmployee({
                    firstName: 'Kokotun',
                }),
            ),
        ).toEqual({
            isLoading: false,
            data: [
                ...data,
                {
                    firstName: 'Kokotun',
                },
            ],
        });
    });
});
