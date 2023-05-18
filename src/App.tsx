import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {GenreMovie, MoviesList} from "./Components";
import {MovieInfo} from "./Components";

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'movies?page=1'}/>}/>
                <Route path={'movies'} element={<MoviesList/>}/>
                <Route path={'info'} element={<MovieInfo/>}/>
                <Route path={'genre'} element={<GenreMovie/>}/>
            </Route>
        </Routes>
    );
}

export default App;
