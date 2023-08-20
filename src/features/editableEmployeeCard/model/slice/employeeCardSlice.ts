import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import {
    Employee,
    EmployeeJobTitle,
    fetchEmployeeById,
} from 'entities/Employee';
import { EmployeeCardSchema } from '../types/employeeCard';

const employeeInit: Employee = {
    birthday: new Date().toLocaleDateString('ru'),
    firstName: '',
    lastName: '',
    phone: '',
    role: EmployeeJobTitle.COOK,
    isArchive: false,
};

const initialState: EmployeeCardSchema = {
    employee: employeeInit,
    readonly: true,
    isLoading: false,
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
        initEmployee: (state) => {
            state.employee = initialState.employee;
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
