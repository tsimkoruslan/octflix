import React, {FC, useEffect} from 'react';
import {useSearchParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../../hooks";
import {moviesActions} from "../../../redux";
import {MovieListCard} from "../MovieListCard";
import {Paginator} from "../../Paginator";
import css from './movies.list.module.css'
import {SearchForm} from "../../SearchForm";
import {GenresList} from "../../GenresList";

const MoviesList: FC = () => {
    const dispatch = useAppDispatch();
    const [query,] = useSearchParams()
    const {movies} = useAppSelector(state => state.moviesReducer);

    useEffect(() => {
        dispatch(moviesActions.getMovies(+query.get('page')))
    }, [dispatch, query]);


    return (
        <div className={css.Main}>
            <div className={css.SearchBar}><SearchForm/></div>
            <div className={css.GenresList}><GenresList/></div>
            <div className={`row row-cols-1 row-cols-md-5 g-4`}>
                    {
                        !movies ? <div>Loading ... </div>
                    :
                    movies.results.map((movie) => (<MovieListCard key={movie.id} movie={movie}/>))
                    }

            </div>
            <div><Paginator/></div>
        </div>
    );
};

export {
    MoviesList
};