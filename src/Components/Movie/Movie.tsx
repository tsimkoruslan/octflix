import React, {FC} from 'react';
import {IResults} from "../../interfaces";


interface IProps {
    movie : IResults
}

const Movie: FC<IProps>  = ({movie}) => {
    const {title, id} = movie
    return (
        <div>
            <div>{id} - {title}</div>
        </div>
    );
};

export {
    Movie
};