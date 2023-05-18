import React, {FC} from 'react';
import {Link} from "react-router-dom";

import css from './all.films.module.css'

const AllFilms: FC = () => {
    return (
        <div className={css.Position}>
            <Link className={css.Normalize}  to={'/movies?page=1'}><button className={`btn btn-outline-secondary `}>All Films</button> </Link>
        </div>
    );
};

export {
    AllFilms
};