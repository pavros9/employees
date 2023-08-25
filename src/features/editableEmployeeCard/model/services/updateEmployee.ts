import { getEmployeeData } from './../selectors/getEmployeeData';
import { Employee } from 'entities/Employee';

import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';

export const updateEmployee = createAsyncThunk<
    Employee,
    void,
    ThunkConfig<string>
>('updateEmployee', async (_, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi;
    const employeeData = getEmployeeData(getState());

    try {
        const response = await extra.api.put<Employee>(
            `/api/employees/${employeeData?.id}`,
            employeeData,
        );

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (e) {
        console.log(e);
        return rejectWithValue('error');
    }
});
