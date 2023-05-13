import React, {FC} from 'react';


import css from './avatar.module.css'
import avatar from '../../assets/images/avatar.jpeg'

const AvatarUser: FC = () => {
    return (
        <div>
            <img className={css.Avatar} src={avatar} alt="avatar"/>
        </div>
    );
};

export {
    AvatarUser
};