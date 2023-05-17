import React, {FC} from 'react';
import {Outlet} from "react-router-dom";

import {HomePage} from "../pages";
import css from './main.module.css'


const MainLayout : FC = () => {
    return (
        <div className={css.Main}>
            <div className={css.HomePage}>
                <HomePage/>
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export {
    MainLayout
};