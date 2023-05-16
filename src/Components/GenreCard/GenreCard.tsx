import React, {FC} from 'react';

import {InfoGenre} from "../../interfaces";
import css from './genre.card.module.css'
import {useAppDispatch, useAppSelector} from "../../hooks";
import {moviesActions} from "../../redux";

interface IProps {
    genre: InfoGenre
}

const GenreCard: FC<IProps> = ({genre}) => {
    const {name, id} = genre

    const {arrIdGenres} = useAppSelector(state => state.moviesReducer)
    const dispatch = useAppDispatch()

    const push = () => {
            const updatedGenres: number[] = [...arrIdGenres, id];
            dispatch(moviesActions.pushIdGenres(updatedGenres));
        }

    return (
        <div className={css.Card}>
            <div onClick={push} className={css.CardInfo}>{name}</div>
        </div>
    );
};

export {
    GenreCard
};