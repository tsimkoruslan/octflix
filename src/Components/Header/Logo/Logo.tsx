import React from 'react';
import {Link} from "react-router-dom";

const Logo = () => {
    return (
        <div>
            <Link to={'/welcome'}> OCTFLIX </Link>
        </div>
    );
};

export {
    Logo
};