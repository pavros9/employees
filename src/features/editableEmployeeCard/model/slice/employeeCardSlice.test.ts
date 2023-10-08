import { Employee, EmployeeJobTitle } from 'entities/Employee';
import { NotificationType } from 'entities/Notification/const/notificationConts';
import { ValidateEmployeeCardError } from '../const/const';
import { EmployeeCardSchema } from '../types/employeeCard';
import { employeeCardActions, employeeCardReducer } from './employeeCardSlice';

describe('employeeCardSlice.test', () => {
    test('update employee in form', () => {
        const state: DeepPartial<EmployeeCardSchema> = {
            form: {
                firstName: 'Roman',
                lastName: 'Rakov',
                role: EmployeeJobTitle.DRIVER,
            },
        };

        expect(
            employeeCardReducer(
                state as EmployeeCardSchema,
                employeeCardActions.updateEmployee({
                    firstName: 'Oleg',
                    role: EmployeeJobTitle.WAITER,
                }),
            ),
        ).toEqual({
            form: {
                firstName: 'Oleg',
                lastName: 'Rakov',
                role: EmployeeJobTitle.WAITER,
            },
        });
    });

    test('change readOnly to false', () => {
        const state: DeepPartial<EmployeeCardSchema> = {
            readonly: true,
        };

        expect(
            employeeCardReducer(
                state as EmployeeCardSchema,
                employeeCardActions.editForm(),
            ),
        ).toEqual({
            readonly: false,
        });
    });

    test('change readOnly to true', () => {
        const state: DeepPartial<EmployeeCardSchema> = {
            readonly: false,
        };

        expect(
            employeeCardReducer(
                state as EmployeeCardSchema,
                employeeCardActions.closeEditingForm(),
            ),
        ).toEqual({
            readonly: true,
        });
    });

    test('cancel editing form', () => {
        const state: DeepPartial<EmployeeCardSchema> = {
            readonly: true,
            form: {
                firstName: 'Oleg',
                lastName: 'Popov',
            },
            employee: {
                firstName: 'Roman',
                lastName: 'Cocov',
            },
        };

        expect(
            employeeCardReducer(
                state as EmployeeCardSchema,
                employeeCardActions.cancelEditing(),
            ),
        ).toEqual({
            readonly: true,
            form: {
                firstName: 'Roman',
                lastName: 'Cocov',
            },
            employee: {
                firstName: 'Roman',
                lastName: 'Cocov',
            },
        });
    });

    test('init employee', () => {
        const employeeInit: Employee = {
            birthday: new Date().toLocaleDateString('ru'),
            firstName: '',
            lastName: '',
            phone: '',
            role: EmployeeJobTitle.COOK,
            isArchive: false,
        };

        const initialState: EmployeeCardSchema = {
            employee: employeeInit,
            form: employeeInit,
            readonly: true,
            isLoading: false,
        };

        const state: DeepPartial<EmployeeCardSchema> = {
            readonly: true,
            form: {
                birthday: new Date().toLocaleDateString('ru'),
                firstName: 'Roman',
                lastName: 'Cocov',
                phone: '+7 (945) 447-2286',
                role: EmployeeJobTitle.WAITER,
                isArchive: true,
            },
            employee: {
                birthday: new Date().toLocaleDateString('ru'),
                firstName: 'Oleg',
                lastName: 'Popov',
                phone: '+7 (945) 441-2086',
                role: EmployeeJobTitle.COOK,
                isArchive: false,
            },
            isLoading: false,
        };

        expect(
            employeeCardReducer(
                state as EmployeeCardSchema,
                employeeCardActions.initEmployee(),
            ),
        ).toEqual(initialState);
    });

    test('set validate error', () => {
        const state: DeepPartial<EmployeeCardSchema> = {};

        expect(
            employeeCardReducer(
                state as EmployeeCardSchema,
                employeeCardActions.setValidateErrors([
                    ValidateEmployeeCardError.REQUIRED_FIRST_NAME,
                    ValidateEmployeeCardError.REQUIRED_LAST_NAME,
                ]),
            ),
        ).toEqual({
            validateErrors: [
                ValidateEmployeeCardError.REQUIRED_FIRST_NAME,
                ValidateEmployeeCardError.REQUIRED_LAST_NAME,
            ],
        });
    });
});
