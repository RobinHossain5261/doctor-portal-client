import React from 'react';

const PrimaryButton = ({ children }) => {
    return (
        <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white font-bold hover:from-cyan-500 hover:to-emerald-500">{children}</button>
    );
};

export default PrimaryButton;