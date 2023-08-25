import { classNames } from 'shared/lib/classNames/classNames';
import { Notification } from '../../model/types/types';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import cls from './NotificationList.module.scss';

interface NotificationListProps {
    items: Notification[];
    position?: string;
}

export const NotificationList = (props: NotificationListProps) => {
    const { items, position = 'right' } = props;
    return (
        <div className={classNames('fixed top-[80px]', {}, [cls[position]])}>
            {items.map((item, index) => (
                <NotificationItem
                    message={item.message}
                    type={item.type}
                    className="mb-3"
                    key={index}
                />
            ))}
        </div>
    );
};
