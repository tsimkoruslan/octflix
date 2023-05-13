import {IRes} from "../types";
import {axiosService} from "./axios.service";
import {urls} from "../constans";
import {IGenre} from "../interfaces/IGenre";

const genreService = {
    getGenre : ():IRes<IGenre> => axiosService.get(urls.genre)
}

export {
    genreService
}