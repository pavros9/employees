import { type RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { FormAddingPage } from 'pages/FormAddingPage';
import { EmployeeDetailsPage } from 'pages/EmployeeDetailsPage';

export enum AppRoutes {
    MAIN = 'main',
    FORM = 'form',
    EMPLOYEE_DETAILS = 'employee_details',

    NOT_FOUND = 'not_found',
}

type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
};

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.FORM]: '/form',
    [AppRoutes.EMPLOYEE_DETAILS]: '/employee/', // +id
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.FORM]: {
        path: RoutePath.form,
        element: <FormAddingPage />,
    },
    [AppRoutes.EMPLOYEE_DETAILS]: {
        path: `${RoutePath.employee_details}:id`,
        element: <EmployeeDetailsPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
