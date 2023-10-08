import { NotificationType } from 'entities/Notification/const/notificationConts';
import { NotificationSchema } from '../types/NotificationSchema';
import { notificationActions, notificationReducer } from './notificationSlice';

describe('norificationSlice.test', () => {
    test('add notification access', () => {
        const state: NotificationSchema = {
            items: [],
            time: 3000,
        };

        expect(
            notificationReducer(
                state as NotificationSchema,
                notificationActions.addNotification({
                    message: 'Message',
                    type: NotificationType.ACCESS,
                }),
            ),
        ).toEqual({
            items: [{ message: 'Message', type: NotificationType.ACCESS }],
            time: 3000,
        });
    });

    test('add notification cancel', () => {
        const state: NotificationSchema = {
            items: [],
            time: 3000,
        };

        expect(
            notificationReducer(
                state as NotificationSchema,
                notificationActions.addNotification({
                    message: 'Message',
                    type: NotificationType.CANCEL,
                }),
            ),
        ).toEqual({
            items: [{ message: 'Message', type: NotificationType.CANCEL }],
            time: 3000,
        });
    });

    test('add notification error', () => {
        const state: NotificationSchema = {
            items: [],
            time: 3000,
        };

        expect(
            notificationReducer(
                state as NotificationSchema,
                notificationActions.addNotification({
                    message: 'Message',
                    type: NotificationType.ERROR,
                }),
            ),
        ).toEqual({
            items: [{ message: 'Message', type: NotificationType.ERROR }],
            time: 3000,
        });
    });

    test('remove notification', () => {
        const state: NotificationSchema = {
            items: [
                {
                    message: 'Message 1',
                    type: NotificationType.ACCESS,
                },
                {
                    message: 'Message 2',
                    type: NotificationType.CANCEL,
                },
            ],
            time: 3000,
        };

        expect(
            notificationReducer(
                state as NotificationSchema,
                notificationActions.removeNotification(),
            ),
        ).toEqual({
            items: [
                {
                    message: 'Message 2',
                    type: NotificationType.CANCEL,
                },
            ],
            time: 3000,
        });
    });
});
