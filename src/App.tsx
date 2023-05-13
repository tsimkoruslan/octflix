import React from 'react';
import {MainLayout} from "./layouts";
import {Navigate, Route, Routes} from "react-router-dom";
import {AllFilms, Genres, Movies} from "./Components";

function App() {
  return (
    <Routes >
        <Route path={'/'} element={<MainLayout/>}>
            <Route index element={<Navigate to={'/'}/>}/>
            <Route path={'movies'} element={<Movies/>}/>
            <Route path={'genres'} element={<Genres/>}/>
        </Route>
    </Routes>
  );
}

export default App;
