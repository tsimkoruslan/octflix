import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {moviesActions} from "../../redux";


const Movies: FC = () => {
    const dispatch = useAppDispatch();
    const { movies } = useAppSelector(state => state.moviesReducer);

    useEffect(() => {
        dispatch(moviesActions.getMovies());
    }, [dispatch]);

    return (
        <div>
            {movies && movies.results.map((film, index) => <div key={index}>{film.title}</div>)}
        </div>
    );
};

export {
    Movies
};