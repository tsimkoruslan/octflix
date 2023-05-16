import {IRes} from "../types";
import {axiosService} from "./axios.service";
import {urls} from "../constans";
import {IMovies} from "../interfaces";

const searchService = {
    searchMovie : (title:string):IRes<IMovies> =>
        axiosService.get(`${urls.search}${title}`),
    // searchPaginator : (page:string):IRes<IMovies> => axiosService.get(`${searchReducer()}`, page)
    searchMovie2 : (title:string, page:string):IRes<IMovies> =>
        axiosService.get(`${urls.search}${title}&${page}`),
}
export {
    searchService
}