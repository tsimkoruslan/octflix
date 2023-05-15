import React, {FC} from 'react';
import {Link} from "react-router-dom";

import css from './menu.module.css'


const Menu: FC = () => {
    return (
        <div className={css.Menu}>
            <Link className={css.Normalize} to={'movies'}> All films </Link>
            <Link className={css.Normalize} to={'genres'}> Genres </Link>
            <Link className={css.Normalize} to={'search'}> Search </Link>
        </div>
    );
};

export {
    Menu
};