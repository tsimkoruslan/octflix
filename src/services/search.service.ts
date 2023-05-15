import {IRes} from "../types";
import {ISearch} from "../interfaces";
import {axiosService} from "./axios.service";
import {urls} from "../constans";

const searchService = {
    searchMovie : (title:string):IRes<ISearch> => axiosService.get(`${urls.search}${title}`)
}
export {
    searchService
}