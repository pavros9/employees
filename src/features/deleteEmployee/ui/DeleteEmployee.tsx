import { NotificationType } from 'entities/Notification';
import { showNotificationWithTimeout } from 'entities/Notification/lib/showNotificationWithTimeout';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Modal } from 'shared/ui/Modal/Modal';
import { deleteEmployeeById } from '../model/services/deleteEmployee';

interface DeleteEmployeeProps {
    isOpenModal: boolean;
    closeModal: (value: boolean) => void;
    selectedEmployee?: number;
}

export const DeleteEmployee = (props: DeleteEmployeeProps) => {
    const { isOpenModal, closeModal, selectedEmployee } = props;
    const dispatch = useAppDispatch();

    const onConfirm = () => {
        selectedEmployee &&
            dispatch(deleteEmployeeById(String(selectedEmployee))).then(() => {
                closeModal(false);
                showNotificationWithTimeout(
                    dispatch,
                    NotificationType.ACCESS,
                    'Работник удален',
                );
            });
    };

    const onCancel = () => {
        closeModal(false);
        showNotificationWithTimeout(
            dispatch,
            NotificationType.CANCEL,
            'Отмена удаления',
        );
    };

    return (
        <div>
            {isOpenModal && (
                <Modal
                    title="Удалить работника?"
                    closeModal={() => closeModal(false)}
                >
                    <div className="text-center text-white">
                        <button
                            onClick={onConfirm}
                            className="px-5 py-2 rounded-lg transition bg-[#1f2937] mr-5 hover:bg-[#4a4d51]"
                        >
                            Да
                        </button>
                        <button
                            onClick={onCancel}
                            className="px-5 py-2 rounded-lg text-black bg-[white] border-[1px]"
                        >
                            Нет
                        </button>
                    </div>
                </Modal>
            )}
        </div>
    );
};
