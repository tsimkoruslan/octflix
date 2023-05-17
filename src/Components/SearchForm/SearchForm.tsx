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
                <form className="input-group mb-3" onSubmit={handleSubmit(search)}>
                    <input type="text" className="form-control"
                           placeholder={'Search movie'} aria-label="Recipient's username"
                           aria-describedby="button-addon2"{...register('title')} />
                    <button  className="btn btn-outline-secondary" id="button-addon2">search</button>
                </form>

            </div>
        </div>
    );
};

export {
    SearchForm
};