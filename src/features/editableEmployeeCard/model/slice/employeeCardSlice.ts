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
    form: employeeInit,
    readonly: true,
    isLoading: false,
};

export const employeeCardSlice = createSlice({
    name: 'employeeCardSlice',
    initialState,
    reducers: {
        updateEmployee: (state, action: PayloadAction<Employee>) => {
            state.form = {
                ...state.form,
                ...action.payload,
            };
        },
        editForm: (state) => {
            state.readonly = false;
        },
        closeEditingForm: (state) => {
            state.readonly = true;
        },
        cancelEditing: (state) => {
            state.form = state.employee;
            state.readonly = true;
        },
        initEmployee: (state) => {
            state.employee = initialState.employee;
            state.form = initialState.employee;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchEmployeeById.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(
                fetchEmployeeById.fulfilled,
                (state, action: PayloadAction<Employee>) => {
                    state.employee = action.payload;
                    state.form = action.payload;
                    state.isLoading = false;
                },
            )
            .addCase(fetchEmployeeById.rejected, (state, action) => {});
    },
});

export const { actions: employeeCardActions } = employeeCardSlice;
export const { reducer: employeeCardReducer } = employeeCardSlice;
