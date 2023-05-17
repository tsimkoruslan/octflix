import React, {useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {GenreCard} from "../GenreCard";
import css from './genre.list.module.css'
import {moviesActions} from "../../redux";


const GenresList = () => {
    const {genres, arrIdGenres} = useAppSelector(state => state.moviesReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(moviesActions.getGenres())
    }, [dispatch])

    useEffect(()=>{
        dispatch(moviesActions.getMovieForGenre(arrIdGenres.toString()))
    },[dispatch, arrIdGenres])

    const reset = () => {
      dispatch(moviesActions.pushIdGenres([]))
    }

    return (


        <div className={css.ButtonPosition}>
            <div className={css.Reset}>
                <button type="button" className="btn btn-secondary btn-sm" onClick={reset} >reset genre</button>
            </div>
            <div className={css.Flex} >
                {!genres ?
                    <div>Loading ... </div>
                :
                genres.genres.map(genre => <GenreCard key={genre.id} genre={genre}/>)
            }
            </div>

        </div>
    );
};

export {
    GenresList
};