import {axiosService} from "./axios.service";
import {IRes} from "../types";
import {IGenre, IMovies} from "../interfaces";
import {urls} from "../constans";


const moviesService = {
    getMovies : (page:number= 1):IRes<IMovies> => axiosService.get(urls.basePage, {params:{page}}),
    searchMovie : (title:string):IRes<IMovies> => axiosService.get(`${urls.search}${title}`),
    getGenre : ():IRes<IGenre> => axiosService.get(urls.genre),
    getGenreById : (id:string): IRes<IMovies> => axiosService.get(`${urls.basePage}${urls.genreBuId}${id}`)
}

export {
    moviesService
}