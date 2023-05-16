import React, {useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {GenreCard} from "../GenreCard";
import css from './genre.list.module.css'
import {moviesActions} from "../../redux";


const GenresList = () => {
    const {genres} = useAppSelector(state => state.moviesReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(moviesActions.getGenres())
    }, [dispatch])

    return (
        <div className={css.Position}>
            {!genres? <div>Loading ... </div>
                    :
                 genres.genres.map(genre =><GenreCard key={genre.id} genre={genre}/> )
            }
        </div>
    );
};

export {
    GenresList
};