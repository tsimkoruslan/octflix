import React, {useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {moviesActions} from "../../redux";
import {MovieListCard} from "../Movies";
import css from './genre.movie.module.css'
import {Paginator} from "../Paginator";

const GenreMovie = () => {

    const {movies} = useAppSelector(state => state.moviesReducer)
    const arr = movies?.results
    console.log(arr)

    const dispatch = useAppDispatch()

    useEffect(()=>{
        dispatch(moviesActions.getMovieForGenre('14'))
    },[dispatch])

    return (
            <div className={css.Main}>
                <div className={`row row-cols- row-cols-md-5 g-4 `}>
                    { ! arr ? <div>Loading...</div> :
                        arr.map(movie => <MovieListCard key={movie.id} movie={movie}/>)
                    }
                </div>
                <Paginator/>
            </div>
    );
};

export {
    GenreMovie
};