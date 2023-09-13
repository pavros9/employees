import { EditableEmployeeCard } from 'features/editableEmployeeCard';
const FormAddingPage = () => {
    return (
        <div className="py-16">
            <h3 className="text-3xl text-center mb-11 font-bold">
                Добавление работника
            </h3>
            <EditableEmployeeCard />
        </div>
    );
};

export default FormAddingPage;
