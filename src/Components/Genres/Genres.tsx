import React, {useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {genreActions} from "../../redux";
import {log} from "util";

const Genres = () => {
    const {genres} = useAppSelector(state => state.genresReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(genreActions.getGenres())
    }, [dispatch])


    return (
        <div>
            {!genres? <div>Loading ... </div>
                    :
                 genres.genres.map(genre => <div>{genre.name}{genre.id}</div>)
            }
        </div>
    );
};

export {
    Genres
};