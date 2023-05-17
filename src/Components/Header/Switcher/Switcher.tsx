import React from 'react';

const Switcher = () => {
    return (
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckChecked"></label>
            </div>
    );
};

export {
    Switcher
};