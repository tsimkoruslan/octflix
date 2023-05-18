import React, {FC} from 'react';

import css from './switcher.module.css';
import {Simulate} from "react-dom/test-utils";


const Switcher: FC = () => {
    return (
            <div className={css.Switcher}>
                <span className={css.Margin}>☀</span>
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                </div>
                <span className={css.Margin}>☾</span>
            </div>
    );
};

export {
    Switcher
};