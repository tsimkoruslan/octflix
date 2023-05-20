import React, {FC} from 'react';


import css from './avatar.module.css'
import avatar from '../../../assets/images/user/Chollo Or Pachuco, A Young Man With Hispanic Origins In The Tattoo Art_.jpeg'
import {useAppSelector} from "../../../hooks";

const AvatarUser: FC = () => {

    const {toggle} = useAppSelector(state => state.moviesReducer)

    const dark = toggle ? `${css.Dark}`: css.Avatar


    return (
        <div className={css.Flex}>
            <div><img className={`${css.Avatar} ${dark}`} src={avatar} alt="avatar"/></div>
            <div className={css.UserName}> Tsimko Ruslan </div>
        </div>
    );
};

export {
    AvatarUser
};