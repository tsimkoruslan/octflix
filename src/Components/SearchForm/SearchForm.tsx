import React, {FC} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {useSearchParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {moviesActions} from "../../redux";

import css from './search.form.module.css'

interface ITitle {
    title: string
    page: string
}

const SearchForm: FC = () => {
    const {register, handleSubmit, reset} = useForm()
    const dispatch = useAppDispatch();

    const {toggle} = useAppSelector(state => state.moviesReducer)

    const dark = toggle ? `${css.Dark}`: css.White

    const search: SubmitHandler<ITitle> = ({title}) => {
        dispatch(moviesActions.search(title))
        reset()
    }

    return (
        <div>
            <form className="input-group mb-3" onSubmit={handleSubmit(search)}>
                <input type="text" className={`form-control ${dark}`}
                       placeholder={'Search movie'} aria-label="Recipient's username"
                       aria-describedby="button-addon2"{...register('title')} />
                <button className="btn btn-outline-secondary" id="button-addon2">search</button>
            </form>
        </div>
    );
};

export {
    SearchForm
};