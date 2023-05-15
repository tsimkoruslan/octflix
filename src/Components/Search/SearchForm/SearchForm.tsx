import React, {FC} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";

import css from './search.form.module.css'
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {searchActions} from "../../../redux";
import {Link} from "react-router-dom";

interface ITitle {
    title: string
}

const SearchForm: FC = () => {

    const {register, handleSubmit, reset} = useForm()
    const dispatch = useAppDispatch();
    const search: SubmitHandler<ITitle> = ({title}) => {
        dispatch(searchActions.search(title))
        reset()
    }

    return (
        <div>
            <div >
                <form onSubmit={handleSubmit(search)}>
                    <input placeholder={'search movie'} {...register('title')}/>
                    <button>search</button>
                </form>
            </div>
        </div>
    );
};

export {
    SearchForm
};