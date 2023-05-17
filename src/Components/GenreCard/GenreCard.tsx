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

    const push =  () => {
        const updatedGenres: string[] = [...arrIdGenres, id.toString()];
        dispatch(moviesActions.pushIdGenres(updatedGenres));

    }


    return (
        <div className={css.Margin}>
            <button type="button" className="btn btn-primary btn-sm" onClick={push} >{name}</button>
        </div>
    );
};

export {
    GenreCard
};