import { Dispatch } from '@reduxjs/toolkit';
import { NotificationTypeTranslation } from '../const/notificationConts';
import { notificationActions } from '../model/slice/notificationSlice';
import { notificationType } from '../model/types/types';

export const showNotificationWithTimeout = (
    dispatch: Dispatch,
    type: string,
    message: string,
    time: number = 1000,
) => {
    dispatch(
        notificationActions.addNotification({
            message,
            type,
        }),
    );

    setTimeout(() => {
        dispatch(notificationActions.removeNotification());
    }, time);
};
