import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getTime } from '../selectors/getTime';
import { notificationActions } from '../slice/notificationSlice';
import { Notification } from '../types/types';

export const showNotification = createAsyncThunk<
    undefined,
    Notification,
    ThunkConfig<string>
>('notification/showNotification', async (data, thunkApi) => {
    const { extra, rejectWithValue, getState, dispatch } = thunkApi;

    try {
        dispatch(notificationActions.addNotification(data));
        const time = getTime(getState());

        setTimeout(() => {
            dispatch(notificationActions.removeNotification());
        }, time);
    } catch (e) {
        console.log(e);
        return rejectWithValue('error');
    }
});
