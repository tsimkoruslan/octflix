import axios from "axios";
import {baseURL} from "../constans";

const axiosService = axios.create({baseURL});

axiosService.interceptors.request.use(config => {
    config.headers.Authorization =
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNzNiZjBjOTE5NzA3MzQ4ZmVlYjIxY2FlMWEzNzRjNCIsInN1YiI6IjY0NWVhMzkxNjUxZmNmMDBmYzkxMjc4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fPBMZOxkH2Ju--rL3LiFjPIiBt8wYQdkv-ya_L0dbmM";
    return config;
});


export {axiosService};
