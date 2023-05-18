import React, {Component, FC, useEffect} from 'react';
import {useLocation} from "react-router-dom";

import {backgroundImage, posterURL} from "../../../constans";
import css from './movie.info.module.css'
import StarRatings from 'react-star-ratings';
import {useAppSelector} from "../../../hooks";
import {IResults} from "../../../interfaces";

const MovieInfo: FC = () => {

    const location = useLocation()

    const {
        genre_ids,
        title,
        vote_average,
        poster_path,
        backdrop_path,
        overview,
        release_date
    } = location.state as IResults

    const {genres} = useAppSelector(state => state.moviesReducer)

    const filteredGenres = genres.genres.filter(genre => genre_ids.includes(genre.id));


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
    return (
        <>
            <div className={css.Parent}>
                <img className={css.Background} src={`${backgroundImage}${backdrop_path}`} alt=""/>
                <div className={css.Positions}>
                    <img className={css.Img} src={`${posterURL}${poster_path}`} alt={title}/>
                </div>
                <div className={css.MainInfo}>
                    <h1>{title}</h1>
                    <p>{release_date}</p>
                    <div>{stars.render()}</div>
                    <p className={css.Overview}>{overview}</p>
                    <div>{
                        filteredGenres.map(i => <span className={css.Genres} key={i.id}>{i.name}</span>)
                    }</div>
                </div>
            </div>

        </>
    );
};

export {
    MovieInfo
};