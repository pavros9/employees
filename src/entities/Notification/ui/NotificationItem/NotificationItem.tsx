import { NotificationTypeTranslation } from 'entities/Notification/const/notificationConts';
import { notificationType } from 'entities/Notification/model/types/types';
import { NotificationType, getTime } from 'entities/Notification';

import { ReactNode, useEffect, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { LoadingBar } from 'shared/ui/LoadingBar/LoadingBar';
import cls from './NotificationItem.module.scss';

import AccessIcon from 'shared/assets/icons/access.svg';
import ErrorIcon from 'shared/assets/icons/error.svg';
import CancelIcon from 'shared/assets/icons/cancel.svg';
import { useSelector } from 'react-redux';

interface NotificationItemProps {
    type: string;
    message: string;
    className?: string;
}
export const NotificationItem = (props: NotificationItemProps) => {
    const { type, message, className } = props;
    const [active, setActive] = useState(false);
    const [startLoad, setStartLoad] = useState(false);
    const time = useSelector(getTime);

    const typesIcon: Record<notificationType, ReactNode> = {
        [NotificationType.ACCESS]: (
            <AccessIcon width={'40px'} height={'40px'} />
        ),
        [NotificationType.ERROR]: <ErrorIcon width={'40px'} height={'40px'} />,
        [NotificationType.CANCEL]: (
            <CancelIcon width={'40px'} height={'40px'} />
        ),
    };

    useEffect(() => {
        const timeIn = setTimeout(() => {
            setActive(true);
            setStartLoad(true);
        }, 100);

        const timeOut = setTimeout(() => {
            setActive(false);
        }, time - 500);

        return () => {
            clearTimeout(timeIn);
            clearTimeout(timeOut);
        };
    }, []);

    return (
        <div
            className={classNames(cls.Notification, { [cls.active]: active }, [
                className,
            ])}
        >
            <div className="mr-3"> {typesIcon[type as notificationType]}</div>
            <div className={classNames('px-5 py-4', {}, [])}>
                <div>
                    {NotificationTypeTranslation[type as notificationType]}
                </div>
                <div>{message}</div>
            </div>
            <LoadingBar startLoad={startLoad} />
        </div>
    );
};
