import React, {FC} from 'react';
import {Link} from "react-router-dom";

const Menu: FC = () => {
    return (
        <div>
            <Link to={'/movies?page=1'}> All films </Link>
        </div>
    );
};

export {
    Menu
};