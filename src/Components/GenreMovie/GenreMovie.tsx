import React from 'react';

import {useAppSelector} from "../../hooks";

import {MovieListCard} from "../MovieListCard";
import css from './genre.movie.module.css'

const GenreMovie = () => {

    const {movies} = useAppSelector(state => state.moviesReducer)
    const arr = movies?.results

    return (
            <div className={css.Main}>
                <div className={css.Text}>Movies of the same genre ↓</div>
                <div className={`row row-cols- row-cols-md-5 g-4 `}>
                    { ! arr ? <div>Loading...</div> :
                        arr.map(movie => <MovieListCard key={movie.id} movie={movie}/>)
                    }
                </div>
            </div>
    );
};

export {
    GenreMovie
};