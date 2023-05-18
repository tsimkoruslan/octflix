import React, {FC} from 'react';
import {Link} from "react-router-dom";

import css from './home.link.module.css'

const HomeLink: FC = () => {
    return (
        <div className={css.Position}>
            <Link className={css.Normalize}  to={'/movies?page=1'}><button className={`btn btn-outline-secondary`}>Home</button> </Link>
        </div>
    );
};

export {
    HomeLink
};