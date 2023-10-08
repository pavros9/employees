import { Employee, EmployeeSortField } from 'entities/Employee';
import { SortOrder } from 'shared/types/sort';
import { sortEmployeesByDate } from '../sortEmployeesByDate/sortEmployeesByDate';

export const sortEmployyesBySort = (
    employees: Employee[],
    order: SortOrder,
    sort: EmployeeSortField,
) => {
    if (sort === EmployeeSortField.CREATED) {
        return employees && sortEmployeesByDate(employees, order);
    }

    if (sort === EmployeeSortField.NAME) {
        return employees.sort((a, b): number => {
            if (a.firstName && b.firstName && order === 'asc') {
                return a.firstName.localeCompare(b.firstName);
            }

            if (a.firstName && b.firstName && order === 'desc') {
                return b.firstName.localeCompare(a.firstName);
            } else {
                return 1;
            }
        });
    }
};
