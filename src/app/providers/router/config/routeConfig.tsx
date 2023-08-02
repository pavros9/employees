import { type RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { SettingsPage } from 'pages/SettingsPage';

export enum AppRoutes {
    MAIN = 'main',
    SETTINGS = 'settings',

    NOT_FOUND = 'not_found',
}

type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
};

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.SETTINGS]: '/settings',
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.SETTINGS]: {
        path: RoutePath.settings,
        element: <SettingsPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
