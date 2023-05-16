import React, {FC, useEffect} from 'react';
import {useSearchParams} from "react-router-dom";

import {useAppSelector} from "../../../hooks";
import {SearchForm} from "../SearchForm";
import {MovieListCard} from "../../Movies";
import {Paginator} from "../../Paginator";

const SearchMoviesList: FC = () => {

    const {movies} = useAppSelector(state => state.searchReducer)

    const [, setQuery] = useSearchParams()

    useEffect(()=>{
        setQuery(prev => ({...prev, page:'1'}))
    },[])




    return (
        <div>
            <div><SearchForm/></div>
            <div>
                {!movies ? <></>
                    : movies.results.map(movie =>(
                        <div>
                            <MovieListCard key={movie.id} movie={movie}/>
                            <Paginator/>
                        </div>))
                }
            </div>
        </div>
    );
};

export {
    SearchMoviesList
};