import React, {FC} from 'react';

import {Switcher} from "./Switcher";
import {AvatarUser} from "./AvatarUser";
import css from './header.module.css'

const Header: FC = () => {
    return (
        <div className={css.Header}>
            <Switcher/>
            <AvatarUser/>
        </div>
    );
};

export {
    Header
}