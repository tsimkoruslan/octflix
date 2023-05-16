import React, {FC} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";

import {useAppDispatch} from "../../../hooks";
import { searchActions} from "../../../redux";
import {useLocation} from "react-router-dom";

interface ITitle {
    title: string
    page: string
}

const SearchForm: FC = () => {

    const {register, handleSubmit, reset} = useForm()
    const dispatch = useAppDispatch();

    const location = useLocation()
    const page = location.search
    const page2 = page.slice(6)
    console.log(page2)


    const search: SubmitHandler<ITitle> = ({title}) => {
        dispatch(searchActions.search([title, page]))
        reset()
    }

    return (
        <div>
            <div>
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