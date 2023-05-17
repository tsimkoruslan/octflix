import React, {FC} from 'react';

import {Switcher} from "./Switcher";
import {AvatarUser} from "./AvatarUser";
import css from './header.module.css'
import {Logo} from "./Logo";
import {Menu} from "../Menu";

const Header: FC = () => {
    return (
        <div className={`${css.Header}`}>
            <Logo/>
            <AvatarUser/>
            <Switcher/>
            <Menu/>
        </div>
    );
};

export {
    Header
}