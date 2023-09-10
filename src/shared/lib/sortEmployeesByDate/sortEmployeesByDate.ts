import { Employee } from 'entities/Employee';
import { SortOrder } from 'shared/types/sort';
import { reformateDate } from '../reformateDate/reformateDate';

export const sortEmployeesByDate = (
    employees: Employee[],
    order: SortOrder,
) => {
    return employees.sort((a, b): number => {
        if (a.birthday && b.birthday) {
            if (order === 'asc') {
                return (
                    new Date(reformateDate(a.birthday)).getTime() -
                    new Date(reformateDate(b.birthday)).getTime()
                );
            } else {
                return (
                    new Date(reformateDate(b.birthday)).getTime() -
                    new Date(reformateDate(a.birthday)).getTime()
                );
            }
        } else {
            return 1;
        }
    });
};
