import { fetchEmployees } from './../services/fetchEmployees';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Employee } from '../types/employee';
import { EmployeeSchema } from '../types/employeeSchema';

const initialState: EmployeeSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
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
    extraReducers: (builder) => {
        builder
            .addCase(fetchEmployees.pending, (state) => {})
            .addCase(
                fetchEmployees.fulfilled,
                (state, action: PayloadAction<Employee[]>) => {
                    state.data = action.payload;
                },
            )
            .addCase(fetchEmployees.rejected, (state, action) => {});
    },
});

export const { actions: employeeActions } = employeeSlice;
export const { reducer: employeeReducer } = employeeSlice;
