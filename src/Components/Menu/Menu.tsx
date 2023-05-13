import React, {FC} from 'react';
import css from './menu.module.css'
import {AllFilms} from "./AllFilms";
import {Genres} from "./Genres";
import {Link} from "react-router-dom";
import {Paginator} from "../Paginator";

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