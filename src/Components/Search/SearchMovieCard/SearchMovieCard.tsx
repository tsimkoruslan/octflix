import React, {FC} from 'react';

import {ISearchMovie} from "../../../interfaces/ISearchMovie";

interface IProps {
    movie: ISearchMovie
}

const SearchMovieCard: FC<IProps> = ({movie}) => {
    const {name} = movie
    return (
        <div>
            {name}
        </div>
    );
};

export {
    SearchMovieCard
};