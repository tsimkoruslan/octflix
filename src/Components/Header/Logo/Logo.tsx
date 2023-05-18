import React from 'react';

import logo from '../../../assets/images/logo/icons8-movie-100.png'
import css from './logo.module.css'
import {Link} from "react-router-dom";

const Logo = () => {
    return (
        <div>
            <Link to={'welcome'}><img className={css.Logo} src={logo} alt={'octfix'}/></Link>
        </div>
    );
};

export {
    Logo
};