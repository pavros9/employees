import { getNotifications, NotificationList } from 'entities/Notification';
import React, { memo, Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { LoaderPage } from 'shared/ui/LoaderPage/LoaderPage';

import { routeConfig } from '../config/routeConfig';

export const AppRouter = memo(() => {
    const dispatch = useAppDispatch();
    const notifications = useSelector(getNotifications);

    return (
        <Suspense fallback={<LoaderPage />}>
            <Routes>
                {Object.values(routeConfig).map(({ element, path }) => (
                    <Route
                        path={path}
                        element={
                            <div className="page-wrapper px-[20px] mb-7">
                                <NotificationList items={notifications} />
                                {element}
                            </div>
                        }
                        key={path}
                    />
                ))}
            </Routes>
        </Suspense>
    );
});
