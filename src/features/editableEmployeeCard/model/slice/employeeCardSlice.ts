import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Employee, fetchEmployeeById } from 'entities/Employee';
import { EmployeeCardSchema } from '../types/employeeCard';

const initialState: EmployeeCardSchema = {
    employee: undefined,
    readonly: true,
};

export const employeeCardSlice = createSlice({
    name: 'employeeCardSlice',
    initialState,
    reducers: {
        updateEmployee: (state, action: PayloadAction<Employee>) => {
            state.employee = {
                ...state.employee,
                ...action.payload,
            };
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchEmployeeById.pending, (state) => {})
            .addCase(
                fetchEmployeeById.fulfilled,
                (state, action: PayloadAction<Employee>) => {
                    state.employee = action.payload;
                },
            )
            .addCase(fetchEmployeeById.rejected, (state, action) => {});
    },
});

export const { actions: employeeCardActions } = employeeCardSlice;
export const { reducer: employeeCardReducer } = employeeCardSlice;
