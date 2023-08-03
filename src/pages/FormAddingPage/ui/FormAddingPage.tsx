import { AddEmployeeForm } from 'features/addEmployeeForm';

const FormAddingPage = () => {
    return (
        <div className="pt-11">
            <h3 className="text-3xl text-center mb-11 font-bold">
                Добавление работника
            </h3>
            <AddEmployeeForm />
        </div>
    );
};

export default FormAddingPage;
