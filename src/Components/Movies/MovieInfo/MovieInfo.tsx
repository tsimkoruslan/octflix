import React, {Component, FC} from 'react';
import {useLocation} from "react-router-dom";

import {IResults} from "../../../interfaces";
import {backgroundImage, posterURL} from "../../../constans";
import css from './movie.info.module.css'
import StarRatings from 'react-star-ratings';

const MovieInfo: FC = () => {


    const location = useLocation()
    const {
        title, poster_path,
        release_date, vote_average, backdrop_path,
        genre_ids, overview
    } = location.state as IResults
    class Bar extends Component {
        render() {
            return (
                <StarRatings numberOfStars={10}
                    rating={vote_average}
                    starDimension="40px"
                    starSpacing="10px"
                />
            );
        }
    }
    const stars = new Bar(StarRatings)
    return (<>
            <div className={css.Parent}>
                    <img className={css.Background} src={`${backgroundImage}${backdrop_path}`} alt="w"/>
                <div className={css.Positions}>
                    <img className={css.Img} src={`${posterURL}${poster_path}`} alt={title}/>
                </div>
                <div className={css.MainInfo}>
                    <h1>{title}</h1>
                    <p>{release_date}</p>
                    <p>{genre_ids}</p>
                    <div>{stars.render()}</div>
                    <p className={css.Overview}>{overview}</p>
                </div>
            </div>
        </>
    );
};

export {
    MovieInfo
};