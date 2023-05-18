import {createAsyncThunk, createSlice, isFulfilled, isRejectedWithValue} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IGenre, IMovies} from "../../interfaces";
import {moviesService} from "../../services";

interface IState {
    genres: IGenre,
    arrIdGenres: string[],
    movies: IMovies,
    error: string,
    img: string,

}

const initialState: IState = {
    genres: null,
    movies: null,
    error: null,
    img: null,
    arrIdGenres: [],

}

const getMovies = createAsyncThunk<IMovies, number>(
    'moviesSlice/getMovies',
    async (page, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getMovies(page)
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const getGenres = createAsyncThunk<IGenre, void>(
    'genresSlice/getGenres',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getGenre()
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const search = createAsyncThunk<IMovies, string>(
    'searchSlice/search',
    async (title, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.searchMovie(title)
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const getMovieForGenre = createAsyncThunk<IMovies, string>(
    'genresSlice/getMovieForGenre',
    async (id, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getGenreById(id.toString())
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)


const slice = createSlice({
        name: 'moviesSlice',
        initialState,
        reducers: {
            pushIdGenres: (state, action) => {
               state.arrIdGenres = action.payload
        }

        },
        extraReducers: builder => {
            builder
                .addCase(getMovieForGenre.fulfilled, (state, action) => {
                    state.movies = action.payload
                })
                .addCase(getMovies.fulfilled, (state, action) => {
                    state.movies = action.payload
                })

                .addCase(search.fulfilled, (state, action) => {
                    state.movies = action.payload
                })
                .addCase(getGenres.fulfilled, (state, action) => {
                    state.genres = action.payload
                })


                .addMatcher(isFulfilled, state => {
                    state.error = null
                })
                .addMatcher(isRejectedWithValue(), (state, action) => {
                    state.error = action.payload as any
                })
        },
    }
)

const {actions, reducer: moviesReducer} = slice;

const moviesActions = {
    ...actions,
    search,
    getGenres,
    getMovies,
    getMovieForGenre
}

export {
    moviesReducer,
    moviesActions
}