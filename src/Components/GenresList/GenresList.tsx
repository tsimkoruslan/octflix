import React, {useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {genreActions} from "../../redux";


const GenresList = () => {
    const {genres} = useAppSelector(state => state.genresReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(genreActions.getGenres())
    }, [dispatch])


    return (
        <div>
            {!genres? <div>Loading ... </div>
                    :
                 genres.genres.map(genre => <div key={genre.id}>{genre.name}{genre.id}</div>)
            }
        </div>
    );
};

export {
    GenresList
};