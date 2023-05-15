import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {GenresList, MoviesList, SearchMoviesList} from "./Components";
import {MovieInfo} from "./Components";
import {WelcomePage} from "./pages/WelcomePage";

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>

                <Route index element={<Navigate to={'welcome'}/>}/>

                <Route path={'welcome'} element={<WelcomePage/>}/>
                <Route path={'movies'} element={<MoviesList/>}/>
                <Route path={'info'} element={<MovieInfo/>}/>
                <Route path={'genres'} element={<GenresList/>}/>
                <Route path={'search'} element={<SearchMoviesList/>}/>
            </Route>
        </Routes>
    );
}

export default App;
