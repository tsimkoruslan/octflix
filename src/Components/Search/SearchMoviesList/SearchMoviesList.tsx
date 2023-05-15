import React, {FC} from 'react';

import {useAppSelector} from "../../../hooks";
import {SearchForm} from "../SearchForm";
import {SearchMovieCard} from "../SearchMovieCard";

const SearchMoviesList: FC = () => {
    const {movies} = useAppSelector(state => state.searchReducer)
    console.log(movies)
    return (
        <div>
            <div><SearchForm/></div>
            <div>
                {!movies ? <></>
                    : movies.results.map(movie => <SearchMovieCard key={movie.id} movie={movie}/>)
                }
            </div>
        </div>
    );
};

export {
    SearchMoviesList
};