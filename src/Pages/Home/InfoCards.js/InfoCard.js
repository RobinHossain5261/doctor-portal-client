import React from 'react';

const InfoCard = ({ card }) => {
    const { name, des, icon, bgClass } = card;
    return (
        <div className={`card lg:card-side  p-6 shadow-xl ${bgClass}`}>
            <figure><img src={icon} alt="Movie" /></figure>
            <div className="card-body text-white">
                <h2 className="card-title">{name}</h2>
                <p >{des}</p>
            </div>
        </div>
    );
};

export default InfoCard;