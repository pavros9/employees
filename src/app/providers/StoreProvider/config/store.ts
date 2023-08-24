import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema, ThunkExtraArg } from './StateSchema';
import { $api } from 'shared/api/api';
import { employeeReducer } from 'entities/Employee';
import { employeeCardReducer } from 'features/editableEmployeeCard';

export function createReduxStore(initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        employee: employeeReducer,
        editableEmployeeCard: employeeCardReducer,
    };

    const extraArg: ThunkExtraArg = {
        api: $api,
    };

    const store = configureStore({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: extraArg,
                },
            }),
    });

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
