import React, {FC} from 'react';

import {Switcher} from "./Switcher";
import {AvatarUser} from "./AvatarUser";
import css from './header.module.css'
import {Logo} from "./Logo";
import {HomeLink} from "./HomeLink";

const Header: FC = () => {
    return (
        <div className={`${css.Header}`}>
            <Logo/>
            <Switcher/>
            <AvatarUser/>
            <HomeLink/>
        </div>
    );
};

export {
    Header
}