import React, {FC} from 'react';
import {useSearchParams} from "react-router-dom";

import css from './paginator.module.css'

const Paginator: FC = () => {

    const [query, setQuery] = useSearchParams()
    const prev = () => {
        setQuery(prev1 =>({...prev1, page: +prev1.get('page') - 1}))
    }
    const next = () => {
        setQuery(prev1 => ({...prev1, page: +prev1.get('page') + 1}))
    }

    return (
        <div className={`btn-group ${css.Paginator}`} role="group" aria-label="Basic example"  >
            <button type="button" className="btn btn-primary" disabled={+query.get('page') <= 1} onClick={prev}>prev</button>
            <button type="button" className="btn btn-primary" disabled={+query.get('page') >= 500} onClick={next}>next</button>
        </div>
    );
};

export {
    Paginator
};