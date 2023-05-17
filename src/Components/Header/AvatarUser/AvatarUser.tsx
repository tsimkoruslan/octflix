import React, {FC} from 'react';


import css from './avatar.module.css'
import avatar from '../../../assets/images/user/_.jpeg'

const AvatarUser: FC = () => {
    return (
        <div className={css.Flex}>
            <div><img className={css.Avatar} src={avatar} alt="avatar"/></div>
            <div className={css.UserName}> Tsimko Ruslan </div>
        </div>
    );
};

export {
    AvatarUser
};