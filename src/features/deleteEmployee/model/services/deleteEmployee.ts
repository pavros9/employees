import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Employee } from 'entities/Employee';

export const deleteEmployeeById = createAsyncThunk<
    Employee,
    string | undefined,
    ThunkConfig<string>
>('deleteEmployeeById', async (employeeId, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    try {
        const response = await extra.api.delete<Employee>(
            `/api/employees/${employeeId}`,
            {
                data: {
                    id: employeeId,
                },
            },
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
