import React from 'react';

import logo from '../../../assets/images/logo/icons8-movie-100.png'
import css from './logo.module.css'

const Logo = () => {
    return (
        <div>
             <img className={css.Logo} src={logo} alt={'octfix'}/>
        </div>
    );
};

export {
    Logo
};