import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { AddEmployeeFormSchema } from '../types/addEmployeeForm';

const initialState: AddEmployeeFormSchema = {
    name: '',
    surname: '',
};

export const addEmployeeFormSlice = createSlice({
    name: 'addEmployeeForm',
    initialState,
    reducers: {
        setName: (
            state: AddEmployeeFormSchema,
            { payload }: PayloadAction<string>,
        ) => {
            state.name = payload;
        },
        setSurname: (
            state: AddEmployeeFormSchema,
            { payload }: PayloadAction<string>,
        ) => {
            state.surname = payload;
        },
    },
});

export const { actions: addEmployeeFormActions } = addEmployeeFormSlice;
export const { reducer: addEmployeeFormReducer } = addEmployeeFormSlice;
