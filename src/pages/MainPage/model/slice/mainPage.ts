import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Employee, EmployeeJobTitle, fetchEmployees } from 'entities/Employee';
import { MainPageSchema } from '../types/MainPageSchema';

const initialState: MainPageSchema = {
    employees: {
        selectedItems: [],
    },
    isLoading: false,

    type: EmployeeJobTitle.COOK,
};

export const mainPageSlice = createSlice({
    name: 'mainPageSlice',
    initialState,
    reducers: {
        setType: (state, action: PayloadAction<EmployeeJobTitle>) => {
            state.type = action.payload;
            if (action.payload === EmployeeJobTitle.ALL) {
                state.employees.selectedItems = state.employees.items;
                console.log('all');
            } else {
                state.employees.selectedItems = state.employees.items?.filter(
                    (employee) => employee.role === action.payload,
                );
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchEmployees.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(
                fetchEmployees.fulfilled,
                (state, action: PayloadAction<Employee[]>) => {
                    state.employees.items = action.payload;
                    state.employees.selectedItems = action.payload;
                    state.isLoading = false;
                },
            )
            .addCase(fetchEmployees.rejected, (state, action) => {});
    },
});

export const { actions: mainPageActions } = mainPageSlice;
export const { reducer: mainPageReducer } = mainPageSlice;
