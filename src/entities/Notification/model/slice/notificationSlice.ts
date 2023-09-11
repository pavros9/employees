import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NotificationSchema } from '../types/NotificationSchema';
import { Notification } from '../types/types';

const initialState: NotificationSchema = {
    items: [],
    time: 3000,
};

export const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        addNotification: (
            state: NotificationSchema,
            { payload }: PayloadAction<Notification>,
        ) => {
            state.items?.push(payload);
        },

        removeNotification: (state: NotificationSchema) => {
            state.items?.shift();
        },
    },
    extraReducers: (builder) => {},
});

export const { actions: notificationActions } = notificationSlice;
export const { reducer: notificationReducer } = notificationSlice;
