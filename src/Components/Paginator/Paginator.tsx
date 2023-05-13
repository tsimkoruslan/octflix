import React, {FC} from 'react';
import {useSearchParams} from "react-router-dom";

import css from './paginator.module.css'


const Paginator: FC = () => {

    const [, setQuery] = useSearchParams()
    const prev = () => {
        setQuery(prev1 =>({...prev1, page: +prev1.get('page') - 1}))
    }
    const next = () => {
        setQuery(prev1 => ({...prev1, page: +prev1.get('page') + 1}))
    }

    return (
        <div className={css.Paginator} >
            <button onClick={prev}>prev</button>
            <button onClick={next}>next</button>
        </div>
    );
};

export {
    Paginator
};