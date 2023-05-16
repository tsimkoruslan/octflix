import {createAsyncThunk, createSlice, isFulfilled, isRejectedWithValue} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IMovies} from "../../interfaces";
import {searchService} from "../../services";


interface IState {
    movies: IMovies
    error: string
}

const initialState: IState = {
    movies: null,
    error: null
}
//
// const search = createAsyncThunk<IMovies ,string >(
//     'searchSlice/search',
//     async (title, {rejectWithValue}) => {
//         try {
//             const {data} = await searchService.searchMovie(title)
//             return data
//         } catch (e) {
//             const err = e as AxiosError
//             return rejectWithValue(err.response.data)
//         }
//     }
// )

const search = createAsyncThunk<IMovies, [string,string]>(
    'searchSlice/paginator',
    async ([title, page], {rejectWithValue}) => {
        try {
            const {data} = await searchService.searchMovie2(title, page)
            console.log(data)
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const slice = createSlice({
        name: 'searchSlice',
        initialState,
        reducers: {},
        extraReducers: builder => {
            builder
                .addCase(search.fulfilled, (state, action) => {
                    state.movies = action.payload
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

const {actions, reducer: searchReducer} = slice;

const searchActions = {
    ...actions,
    search
}

export {
    searchActions,
    searchReducer
}