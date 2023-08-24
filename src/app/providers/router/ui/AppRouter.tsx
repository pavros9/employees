import React, { memo, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoaderPage } from 'shared/ui/LoaderPage/LoaderPage';

import { routeConfig } from '../config/routeConfig';

export const AppRouter = memo(() => {
    return (
        <Suspense fallback={<LoaderPage />}>
            <Routes>
                {Object.values(routeConfig).map(({ element, path }) => (
                    <Route
                        path={path}
                        element={<div className="page-wrapper">{element}</div>}
                        key={path}
                    />
                ))}
            </Routes>
        </Suspense>
    );
});
