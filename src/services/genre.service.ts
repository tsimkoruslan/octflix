import {IRes} from "../types";
import {axiosService} from "./axios.service";
import {urls} from "../constans";
import {IGenre} from "../interfaces";

const genreService = {
    getGenre : ():IRes<IGenre> => axiosService.get(urls.genre),
}

export {
    genreService
}