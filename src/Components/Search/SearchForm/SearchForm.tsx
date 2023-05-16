import React, {FC, useEffect} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {useLocation, useSearchParams} from "react-router-dom";

import {useAppDispatch} from "../../../hooks";
import  {searchActions} from "../../../redux";

interface ITitle {
    title: string
    page: string
}

const SearchForm: FC = () => {
     const [query, _] = useSearchParams()

    const {register, handleSubmit} = useForm()
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(searchActions.search([query.get('title'), query.get('page')]))
    }, [query, dispatch])
    const search: SubmitHandler<ITitle> = ({title}) => {
        dispatch(searchActions.search([title, query.get('page')]))
    }

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit(search)}>
                    <input placeholder={'search movie'} {...register('title')} />
                </form>
            </div>
        </div>
    );
};

export {
    SearchForm
};