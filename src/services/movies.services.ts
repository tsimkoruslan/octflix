import {axiosService} from "./axios.service";
import {IRes} from "../types";
import {IMovies} from "../interfaces";
import {urls} from "../constans";


const moviesServices = {
    getBaseMovies : ():IRes<IMovies> => axiosService.get(urls.basePage)
}


export {
    moviesServices
}