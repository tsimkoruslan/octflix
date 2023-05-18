import React, {FC} from 'react';

import {Switcher} from "./Switcher";
import {AvatarUser} from "./AvatarUser";
import css from './header.module.css'
import {Logo} from "./Logo";
import {AllFilms} from "../AllFilms";

const Header: FC = () => {
    return (
        <div className={`${css.Header}`}>
            <Logo/>
            <AvatarUser/>
            <Switcher/>
            <AllFilms/>
        </div>
    );
};

export {
    Header
}