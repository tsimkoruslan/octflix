import React, {FC, useState} from 'react';

import {InfoGenre} from "../../interfaces";
import css from './genre.card.module.css'
import {useAppDispatch, useAppSelector} from "../../hooks";
import {moviesActions} from "../../redux";
import {log} from "util";

interface IProps {
    genre: InfoGenre
}

const GenreCard: FC<IProps> = ({genre}) => {
    const {name, id} = genre

    const {arrIdGenres} = useAppSelector(state => state.moviesReducer)
    const dispatch = useAppDispatch()
    const push =  () => {
        const updatedGenres = [...arrIdGenres, id.toString()];

        dispatch(moviesActions.pushIdGenres(updatedGenres))
        dispatch(moviesActions.getMovieForGenre(updatedGenres.toString()))

    }

    function disabledFunc(arrId, id:string) {
        return arrId.includes(id.toString());
    }

    const disabled = disabledFunc(arrIdGenres, id.toString());

    return (
        <div>
            <button disabled={disabled} type="button" className={`btn btn-outline-secondary ${css.Button} `} onClick={push}>{name}</button>
        </div>
    );
};

export {
    GenreCard
};