import {createAsyncThunk, createSlice, isFulfilled, isRejectedWithValue} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IMovies} from "../../interfaces";
import {moviesServices} from "../../services";

interface IState {
    movies: IMovies
    error: string
    page: number
}

const initialState: IState = {
    movies: null,
    error: null,
    page: null,
}

const getMovies = createAsyncThunk<IMovies, number>(
    'moviesSlice/getMovies',
    async (page, {rejectWithValue}) => {
        try {
            const {data} = await moviesServices.getMovies(page)
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
        reducers: {},
        extraReducers: builder => {
            builder
                .addCase(getMovies.fulfilled, (state, action) => {
                    state.movies = action.payload
                    state.page = action.payload.page
                })

                .addMatcher(isFulfilled, state => {
                    state.error = null
                } )
                .addMatcher(isRejectedWithValue(), (state, action) => {
                    state.error = action.payload as any
                })
        },
    }
)

const {actions, reducer: moviesReducer} = slice;

const moviesActions = {
    ...actions,
    getMovies
}

export {
    moviesReducer,
    moviesActions
}