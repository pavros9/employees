import { Employee } from 'entities/Employee';
import { EmployeeJobTitleTranslation } from 'entities/Employee/model/const/employeeConts';
import { JobTitle } from '../../model/types/employee';
import DeleteIcon from 'shared/assets/icons/delete.svg';
import { useNavigate } from 'react-router-dom';

interface EmployeesListProps {
    employees?: Employee[];
}

export const EmployeesList = (props: EmployeesListProps) => {
    const { employees } = props;
    const navigate = useNavigate();

    const onChooseEnmployee = (emp: Employee) => {
        navigate('/employee/' + String(emp.id));
    };

    return (
        <div className="overflow-x-auto">
            <div className="min-w-screen flex items-center justify-center font-sans overflow-hidden">
                <div className="w-full lg:w-5/6">
                    <div className="bg-white shadow-md rounded my-6">
                        <table className="min-w-max w-full table-auto">
                            <thead>
                                <tr className="bg-gray-200 text-gray-600  uppercase text-sm leading-normal">
                                    <th className="py-3 px-6 text-left">Имя</th>
                                    <th className="py-3 px-6 text-left">
                                        Роль
                                    </th>
                                    <th className="py-3 px-6 text-center">
                                        Телефон
                                    </th>
                                    <th className="py-3 px-6 text-center">
                                        Дата рождения
                                    </th>
                                    <th className="py-3 px-6 text-center">
                                        Действия
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-600 text-sm font-light">
                                {employees?.map((emp: Employee) => (
                                    <tr
                                        key={emp.id}
                                        className="border-b cursor-pointer border-gray-200 "
                                    >
                                        <td
                                            onClick={() =>
                                                onChooseEnmployee(emp)
                                            }
                                            className="py-3 px-6 text-left whitespace-nowrap hover:bg-gray-100"
                                        >
                                            <span className="font-medium">
                                                {emp.firstName}
                                            </span>
                                        </td>
                                        <td
                                            onClick={() =>
                                                onChooseEnmployee(emp)
                                            }
                                            className="py-3 px-6 text-left hover:bg-gray-100"
                                        >
                                            {
                                                EmployeeJobTitleTranslation[
                                                    emp.role as JobTitle
                                                ]
                                            }
                                        </td>
                                        <td className="py-3 px-6 text-center">
                                            {emp.phone}
                                        </td>
                                        <td className="py-3 px-6 text-center">
                                            {emp.birthday}
                                        </td>
                                        <td className="py-3 px-6 text-center flex justify-center">
                                            <DeleteIcon
                                                onClick={() =>
                                                    console.log(
                                                        'Открытие модалки',
                                                    )
                                                }
                                                className="hover:scale-125 transition duration-150 ease-out"
                                                width={'32px'}
                                                height={'32px'}
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};
