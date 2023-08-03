import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Employee } from '../types/employee';
import { EmployeeSchema } from '../types/employeeSchema';

const initialState: EmployeeSchema = {
    isLoading: false,
    error: undefined,
    data: [],
};

export const employeeSlice = createSlice({
    name: 'employee',
    initialState,
    reducers: {
        addEmployee: (
            state: EmployeeSchema,
            { payload }: PayloadAction<Employee>,
        ) => {
            state.data?.push(payload);
        },
    },
});

export const { actions: employeeActions } = employeeSlice;
export const { reducer: employeeReducer } = employeeSlice;
