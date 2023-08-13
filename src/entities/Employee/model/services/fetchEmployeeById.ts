import { Employee } from './../types/employee';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';

export const fetchEmployeeById = createAsyncThunk<
    Employee,
    string | undefined,
    ThunkConfig<string>
>('employee/fetchEmployeeById', async (employeeId, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    try {
        const response = await extra.api.get<Employee>(
            `/api/employees/${employeeId}`,
            {},
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
