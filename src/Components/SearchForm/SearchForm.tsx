import React, {FC} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {useSearchParams} from "react-router-dom";

import {useAppDispatch} from "../../hooks";
import {moviesActions} from "../../redux";

interface ITitle {
    title: string
    page: string
}

const SearchForm: FC = () => {
    const [ ,setQuery] = useSearchParams()
    const {register, handleSubmit, reset} = useForm()
    const dispatch = useAppDispatch();

    const search: SubmitHandler<ITitle> = ({title}) => {
        setQuery(prev => ({...prev, title:title}))
        dispatch(moviesActions.search(title))
        reset()
    }

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit(search)}>
                    <input placeholder={'search movie'} {...register('title')} />
                    <button>search</button>
                </form>
            </div>
        </div>
    );
};

export {
    SearchForm
};