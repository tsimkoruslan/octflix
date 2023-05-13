import React, {FC} from 'react';

import {Header, Menu, Search} from "../../Components";


const HomePage: FC = () => {
    return (
        <div>
            <Header/>
            <Search/>
            <Menu/>
        </div>

    );
};

export {
    HomePage
};