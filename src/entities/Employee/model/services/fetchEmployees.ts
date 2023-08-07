import { Employee } from './../types/employee';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';

export const fetchEmployees = createAsyncThunk<
    Employee[],
    undefined,
    ThunkConfig<string>
>('employees/fetchEmployees', async (_, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    try {
        const response = await extra.api.get<Employee[]>(`/employees`, {});

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (e) {
        console.log(e);
        return rejectWithValue('error');
    }
});
