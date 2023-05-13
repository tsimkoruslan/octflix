import React, {FC} from 'react';

import {Switcher} from "./Switcher";
import {AvatarUser} from "./AvatarUser";
import css from './header.module.css'
import {Logo} from "./Logo";

const Header: FC = () => {
    return (
        <div className={css.Header}>
            <Logo/>
            <Switcher/>
            <AvatarUser/>
        </div>
    );
};

export {
    Header
}