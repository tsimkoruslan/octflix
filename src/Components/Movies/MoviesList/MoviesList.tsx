import React, {FC, useEffect} from 'react';
import {useSearchParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../../hooks";
import {moviesActions} from "../../../redux";
import {MovieListCard} from "../MovieListCard";
import {Paginator} from "../../Paginator";
import css from './movies.list.module.css'


const MoviesList: FC = () => {
    const dispatch = useAppDispatch();
    const [query , setQuery] = useSearchParams()
    const {movies} = useAppSelector(state => state.moviesReducer);

    useEffect(()=>{
       setQuery(prev => ({...prev, page:'1'}))
   },[])

    useEffect(() => {
        dispatch(moviesActions.getMovies(+query.get('page')))
    }, [dispatch, query]);

    return (

        <div className={css.Movies}>
            {!movies? <div>Loading ... </div>
                :
                movies.results.map((movie) => <MovieListCard key={movie.id} movie={movie}/>)
            }
            <Paginator/>

        </div>
    );
};

export {
    MoviesList
};