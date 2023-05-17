import React, {FC} from 'react';
import {Link} from "react-router-dom";

import css from './menu.module.css'

const Menu: FC = () => {
    return (
        <div>
            <Link to={'/movies?page=1'}> All films </Link>
        </div>
    );
};

export {
    Menu
};