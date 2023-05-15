import React, {FC} from 'react';
import {Link} from "react-router-dom";

import {IResults} from "../../../interfaces";
import css from './movi.list.card.module.css'
import {posterURL} from "../../../constans";

interface IProps {
    movie: IResults

}

const MovieListCard: FC<IProps> = ({movie}) => {

    const {title, vote_average, poster_path, release_date} = movie


    return (
        <div className={css.PlacingCard}>
            <Link className={css.Normalize} to={'/info'} state={{...movie}}>
                <div className={`${css.Normalize} ${css.Placing}`}>
                    <div>
                        <img className={css.Poster} src={`${posterURL}/${poster_path}`} alt={title}/>
                    </div>
                    <div className={css.PlacingInfo}>
                        <h3 className={css.Title}>{title}</h3>
                        <p>release {release_date}</p>
                        <p>{vote_average} ★</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export {
    MovieListCard
};