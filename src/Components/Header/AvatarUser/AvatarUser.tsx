import React, {FC} from 'react';


import css from './avatar.module.css'
import avatar from '../../../assets/images/user/Thirty-One Rare Celebrity Photos Few People Have Seen.jpeg'

const AvatarUser: FC = () => {
    return (
        <div className={css.Flex}>
            <div><img className={css.Avatar} src={avatar} alt="avatar"/></div>
            <div className={css.UserName}> Angelina Jolie </div>
        </div>
    );
};

export {
    AvatarUser
};