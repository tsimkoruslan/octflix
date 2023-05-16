import {IRes} from "../types";
import {axiosService} from "./axios.service";
import {urls} from "../constans";
import {IMovies} from "../interfaces";

const searchService = {
    searchMovie : (title:string, page:string):IRes<IMovies> =>
        axiosService.get(`${urls.search}${title}&`,{params: {page}}),
}
export {
    searchService
}