import React, {Component, FC} from 'react';
import {Link, useLocation} from "react-router-dom";
import StarRatings from 'react-star-ratings';

import {backgroundImage, posterURL} from "../../constans";
import css from './movie.info.module.css'
import {useAppDispatch, useAppSelector} from "../../hooks";
import {IResults} from "../../interfaces";
import emptyPoster from "../../assets/images/empty/Programmer - Blank Poster.jpeg";
import emptyBackground from "../../assets/images/empty/background_photo.jpeg";
import {moviesActions} from "../../redux";

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
    } = location.state as IResults;

    const {genres, toggle} = useAppSelector(state => state.moviesReducer);
    const filteredGenres = genres?.genres.filter(genre => genre_ids.includes(genre.id));

    const dispatch = useAppDispatch()
    const dark = toggle ? `${css.Dark}`: css.White
    const searchGenre = (id) => {
        dispatch(moviesActions.getMoviesByGenre(id))
    }


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

    const imgPosterEmpty = poster_path ? `${posterURL}${poster_path}` : `${emptyPoster}`
    const imgBackgroundEmpty = backdrop_path ? `${backgroundImage}${backdrop_path}` : `${emptyBackground}`

    return (
        <div className={`${css.Parent} ${dark}`}>
            <img className={css.Background} src={imgBackgroundEmpty} alt=""/>
            <div className={css.Positions}>
                <img className={css.Img} src={imgPosterEmpty} alt={title}/>
            </div>
            <div className={css.MainInfo}>
                <h1>{title}</h1>
                <p>{release_date}</p>
                <div className={css.Stars}>{stars.render()}</div>
                <p className={css.Overview}>{overview}</p>
                <div>
                    {
                        !genres ?
                            <Link to={'/movies'}>
                                <button className={`btn btn-outline-secondary`}> Loading genre ...</button>
                            </Link> :

                            filteredGenres.map(i =>
                                <Link key={i.id} to={'/genre'}>
                                    <button className={`btn btn-outline-secondary ${css.Genres} `}
                                            onClick={() => {
                                                searchGenre(i.id)
                                            }}>
                                        {i.name}
                                    </button>
                                </Link>)
                    }
                </div>
            </div>
        </div>
    );
};

export {
    MovieInfo
};