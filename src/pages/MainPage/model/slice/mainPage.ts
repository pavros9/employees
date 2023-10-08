import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    Employee,
    EmployeeJobTitle,
    EmployeeSortField,
    fetchEmployees,
} from 'entities/Employee';
import { deleteEmployeeById } from 'features/deleteEmployee/model/services/deleteEmployee';
import { sortEmployyesBySort } from 'shared/lib/sortEmployeesBySort/sortEmployeesBySort';
import { SortOrder } from 'shared/types/sort';
import { MainPageSchema } from '../types/MainPageSchema';

const initialState: MainPageSchema = {
    employees: {
        selectedItems: [],
    },
    isLoading: false,
    order: 'desc',
    sort: EmployeeSortField.CREATED,
    type: EmployeeJobTitle.ALL,
};

export const mainPageSlice = createSlice({
    name: 'mainPageSlice',
    initialState,
    reducers: {
        setType: (state, action: PayloadAction<EmployeeJobTitle>) => {
            state.type = action.payload;
            if (action.payload === EmployeeJobTitle.ALL) {
                state.employees.selectedItems = state.employees.items;
            } else {
                state.employees.selectedItems = state.employees.items?.filter(
                    (employee) => employee.role === action.payload,
                );
            }

            state.employees.selectedItems =
                state.employees.selectedItems &&
                sortEmployyesBySort(
                    state.employees.selectedItems,
                    state.order,
                    state.sort,
                );
        },

        setSort: (state, action: PayloadAction<EmployeeSortField>) => {
            state.sort = action.payload;

            state.employees.selectedItems =
                state.employees.selectedItems &&
                sortEmployyesBySort(
                    state.employees.selectedItems,
                    state.order,
                    state.sort,
                );
        },

        setOrder: (state, action: PayloadAction<SortOrder>) => {
            state.order = action.payload;

            state.employees.selectedItems =
                state.employees.selectedItems &&
                sortEmployyesBySort(
                    state.employees.selectedItems,
                    state.order,
                    state.sort,
                );
        },

        initEmployees: (state) => {
            state.employees.selectedItems =
                state.employees.selectedItems &&
                sortEmployyesBySort(
                    state.employees.selectedItems,
                    state.order,
                    state.sort,
                );
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

                    const sortEmployees =
                        state.employees.items &&
                        sortEmployyesBySort(
                            [...state.employees.items],
                            state.order,
                            state.sort,
                        );

                    state.employees.selectedItems = sortEmployees;
                    state.isLoading = false;
                },
            )
            .addCase(fetchEmployees.rejected, (state, action) => {})

            .addCase(deleteEmployeeById.pending, (state) => {})
            .addCase(deleteEmployeeById.fulfilled, (state, action) => {
                state.employees.selectedItems =
                    state.employees.selectedItems?.filter(
                        (emp) => emp.id !== Number(action.meta.arg),
                    );

                state.employees.items = state.employees.items?.filter(
                    (emp) => emp.id !== Number(action.meta.arg),
                );
            })
            .addCase(deleteEmployeeById.rejected, (state, action) => {});
    },
});

export const { actions: mainPageActions } = mainPageSlice;
export const { reducer: mainPageReducer } = mainPageSlice;
