import { Employee } from 'entities/Employee';

interface EmployeesListProps {
    employees?: Employee[];
}

export const EmployeesList = (props: EmployeesListProps) => {
    const { employees } = props;

    const onChooseEnmployee = (emp: Employee) => {
        console.log(emp);
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
                                </tr>
                            </thead>
                            <tbody className="text-gray-600 text-sm font-light">
                                {employees?.map((emp: Employee) => (
                                    <tr
                                        key={emp.id}
                                        onClick={() => onChooseEnmployee(emp)}
                                        className="border-b cursor-pointer border-gray-200 hover:bg-gray-100"
                                    >
                                        <td className="py-3 px-6 text-left whitespace-nowrap">
                                            <span className="font-medium">
                                                {emp.name}
                                            </span>
                                        </td>
                                        <td className="py-3 px-6 text-left">
                                            {emp.role}
                                        </td>
                                        <td className="py-3 px-6 text-center">
                                            {emp.phone}
                                        </td>
                                        <td className="py-3 px-6 text-center">
                                            {emp.birthday}
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
