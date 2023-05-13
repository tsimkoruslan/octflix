import React, {FC, useEffect} from 'react';
import {useSearchParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {moviesActions} from "../../redux";
import css from './movies.module.css'
import {Movie} from "../Movie/Movie";
import {Paginator} from "../Paginator";


const Movies: FC = () => {
    const dispatch = useAppDispatch();
    const [ query , serQuery] = useSearchParams()
    const {movies} = useAppSelector(state => state.moviesReducer);

    useEffect(()=>{
       serQuery(prev => ({...prev, page:'1'}))
   },[])

    useEffect(() => {
        dispatch(moviesActions.getMovies(+query.get('page')))
    }, [dispatch, query]);

    return (
        <div className={css.Movies}>
            {
                movies && movies.results.map((movie) => <Movie key={movie.id} movie={movie}/>)
            }
            <Paginator/>

        </div>
    );
};

export {
    Movies
};