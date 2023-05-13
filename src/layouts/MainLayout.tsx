import React, {FC} from 'react';
import {Outlet} from "react-router-dom";

import {Movies} from "../Components";
import {HomePage} from "../pages";

const MainLayout : FC = () => {
    return (
        <div>
            <HomePage/>
            <Movies/>

            <Outlet/>
        </div>
    );
};

export {
    MainLayout
};