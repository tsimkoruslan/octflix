import {axiosService} from "./axios.service";
import {IRes} from "../types";
import {IMovies} from "../interfaces";
import {urls} from "../constans";


const moviesService = {
    getMovies : (page:number= 1):IRes<IMovies> => axiosService.get(urls.basePage, {params:{page}})
}


export {
    moviesService
}