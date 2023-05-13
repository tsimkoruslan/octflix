import React, {FC} from 'react';
import {useSearchParams} from "react-router-dom";

import css from './paginator.module.css'
import {queries} from "@testing-library/react";
import {useAppSelector} from "../../hooks";


const Paginator: FC = () => {
    const {page}=useAppSelector(state => state.moviesReducer)

    const [query, setQuery] = useSearchParams()
    const prev = () => {
        setQuery(prev1 =>({...prev1, page: +prev1.get('page') - 1}))
    }
    const next = () => {
        setQuery(prev1 => ({...prev1, page: +prev1.get('page') + 1}))
    }

    return (
        <div className={css.Paginator} >
            <button disabled={+query.get('page') <= 1} onClick={prev}>prev</button>
            <button disabled={+query.get('page') >= 500} onClick={next}>next</button>
        </div>
    );
};

export {
    Paginator
};