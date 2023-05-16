import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {MoviesList} from "./Components";
import {MovieInfo} from "./Components";

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>

                <Route index element={<Navigate to={'movies'}/>}/>

                <Route path={'movies'} element={<MoviesList/>}/>
                <Route path={'info'} element={<MovieInfo/>}/>
            </Route>
        </Routes>
    );
}

export default App;
