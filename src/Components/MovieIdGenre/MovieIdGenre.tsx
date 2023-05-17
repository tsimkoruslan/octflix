import React, {useEffect} from 'react';
import {moviesActions} from "../../redux";
import {useAppDispatch, useAppSelector} from "../../hooks";

const MovieIdGenre = () => {
    const {arrIdGenres, movies} = useAppSelector(state => state.moviesReducer)

    const dispatch = useAppDispatch()

    useEffect(()=>{
        dispatch(moviesActions.pushIdGenres(arrIdGenres))
    },[dispatch, arrIdGenres])

    return (
        <div>
            {
                !movies? <div>Loading ... </div>
                    :
                    movies.results.map(i=><div>{i.title}</div>)
            }
        </div>
    );
};

export {
    MovieIdGenre
};