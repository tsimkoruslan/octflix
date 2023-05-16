import {createAsyncThunk, createSlice, isFulfilled, isRejectedWithValue} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IGenre} from "../../interfaces";
import {genreService} from "../../services";


interface IState {
    genres: IGenre
    error: string
}

const initialState: IState = {
    genres: null,
    error: null
}

const getGenres = createAsyncThunk<IGenre, void>(
    'genresSlice/getGenres',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await genreService.getGenre()
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const slice = createSlice({
        name: 'genresSlice',
        initialState,
        reducers: {},
        extraReducers: builder => {
            builder
                .addCase(getGenres.fulfilled, (state, action) => {
                     state.genres = action.payload
                })
                .addMatcher(isFulfilled, state => {
                    state.error = null
                } )
                .addMatcher(isRejectedWithValue(), (state, action) => {
                    state.error = action.payload as any
                })
        }
    }
)

const {actions, reducer: genresReducer} = slice;

const genreActions = {
    ...actions,
    getGenres
}

export {
    genreActions,
    genresReducer
}