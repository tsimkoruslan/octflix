import React, {FC, useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {moviesActions} from "../../redux";

import css from './movies.module.css'
import {Movie} from "../Movie/Movie";


const Movies: FC = () => {
    const dispatch = useAppDispatch();
    const { movies } = useAppSelector(state => state.moviesReducer);

    useEffect(() => {
        dispatch(moviesActions.getMovies());
    }, [dispatch]);

    return (
        <div className={css.Movies}>
            {movies && movies.results.map((movie) => <Movie key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {
    Movies
};