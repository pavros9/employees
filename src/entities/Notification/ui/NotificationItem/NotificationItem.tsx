import { NotificationTypeTranslation } from 'entities/Notification/const/notificationConts';
import { notificationType } from 'entities/Notification/model/types/types';
import { classNames } from 'shared/lib/classNames/classNames';
import { LoadingBar } from 'shared/ui/LoadingBar/LoadingBar';
import cls from './NotificationItem.module.scss';

interface NotificationItemProps {
    type: string;
    message: string;
    className?: string;
}
export const NotificationItem = (props: NotificationItemProps) => {
    const { type, message, className } = props;
    return (
        <div
            className={classNames(
                ' w-[200px] text-white cursor-pointer border-2',
                {},
                [className],
            )}
        >
            <div
                className={classNames('bg-[#4ea4ef] px-5 py-4', {}, [
                    cls[type],
                ])}
            >
                <div>
                    {NotificationTypeTranslation[type as notificationType]}
                </div>
                <div>{message}</div>
            </div>

            <div className="bg-white px-5 py-4">
                <LoadingBar />
            </div>
        </div>
    );
};
