import React, {FC} from 'react';

import css from './homePage.module.css'
import {Header, Menu} from "../../Components";

const HomePage: FC = () => {
    return (
        <div >
            <div><Header/></div>
            <div className={css.Menu}><Menu/></div>
        </div>

    );
};

export {
    HomePage
};