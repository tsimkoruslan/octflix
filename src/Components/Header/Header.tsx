import React, {FC} from 'react';
import {Switcher} from "./Switcher";
import {AvatarUser} from "../AvatarUser";

const Header: FC = () => {
    return (
        <div>
            <Switcher/>
            <AvatarUser/>
        </div>
    );
};

export {
    Header
}
    ;