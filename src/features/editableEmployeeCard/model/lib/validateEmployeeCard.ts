import { Employee } from 'entities/Employee';
import { ValidateEmployeeCardError } from '../const/const';

export const validateEmployeeCard = (employee?: Employee) => {
    const validateErrors = [];

    if (!employee) {
        validateErrors.push(ValidateEmployeeCardError.NO_DATA);

        return validateErrors;
    }

    if (!employee?.firstName) {
        validateErrors.push(ValidateEmployeeCardError.REQUIRED_FIRST_NAME);
    }

    if (!employee?.lastName) {
        validateErrors.push(ValidateEmployeeCardError.REQUIRED_LAST_NAME);
    }

    if (!employee?.phone) {
        validateErrors.push(ValidateEmployeeCardError.REQUIRED_PHONE);
    }

    return validateErrors;
};
