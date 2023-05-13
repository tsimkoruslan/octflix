import React, {FC} from 'react';

import {Header, Menu, Search} from "../../Components";


const HomePage: FC = () => {
    return (
        <>
            <div >
                <Header/>
            </div>
            <div>
                <Search/>
            </div>
            <div>
                <Menu/>
            </div>
        </>
    );
};

export {
    HomePage
};