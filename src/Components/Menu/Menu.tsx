import React, {FC} from 'react';
import {Link} from "react-router-dom";

import css from './menu.module.css'


const Menu: FC = () => {
    return (
        <div className={css.Menu}>
            <Link to={'movies'}> All films </Link>
            <Link to={'genres'}> Genres </Link>
        </div>
    );
};

export {
    Menu
};