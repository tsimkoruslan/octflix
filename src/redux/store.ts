import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {genresReducer, moviesReducer, searchReducer} from "./slice";

const rootReducer = combineReducers({
    moviesReducer,
    genresReducer,
    searchReducer
})

const setupStore = () => configureStore({
    reducer: rootReducer
})

type RootState = ReturnType<typeof rootReducer>
type AppStore = ReturnType<typeof setupStore>
type AppDispatch = AppStore['dispatch']

export type {
    RootState,
    AppStore,
    AppDispatch
}

export {
    setupStore
}