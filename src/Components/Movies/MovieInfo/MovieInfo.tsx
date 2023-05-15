import React, {FC} from 'react';
import {useLocation} from "react-router-dom";

import {IResults} from "../../../interfaces";


const MovieInfo: FC = () => {

    const location = useLocation()

    const {id, title, original_title} = location.state as IResults
    return (
        <div>
            <div> ==-==-==-==-==-==- {id}-{title}-{original_title}</div>
        </div>
    );
};

export {
    MovieInfo
};