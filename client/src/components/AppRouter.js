import { Routes, Route, Redirect } from 'react-router-dom';
import React, { useContext } from 'react';
import { authRoutes, publicRoutes } from '../routes';
import Shop from '../pages/Shop';
import { Context } from '../index';



const AppRouter = (props) => {
    const { user } = useContext(Context)
    console.log(user)
    return (
        <Routes>
            {user.isAuth && authRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} element={<Component />} exact />
            )}
            {publicRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} element={<Component />} exact />
            )}
            <Route path="*" element={<Shop to="/" />}
            />
        </Routes>
    );
}

export default AppRouter;