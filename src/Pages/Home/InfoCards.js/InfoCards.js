import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import InfoCard from './InfoCard';

const InfoCards = () => {

    const cardData = [
        {
            id: 1,
            name: 'Opening Hours',
            des: 'Starts at 9.00am to at 7.00pm',
            bgClass: 'bg-gradient-to-r from-primary to-secondary',
            icon: clock
        },
        {
            id: 2,
            name: 'Visit our location',
            des: 'pabna,dhaka',
            bgClass: 'bg-accent',
            icon: marker
        },
        {
            id: 3,
            name: 'Contact us',
            des: '01744255383',
            bgClass: 'bg-gradient-to-r from-primary to-secondary',
            icon: phone
        }
    ]

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
            {
                cardData.map(card => <InfoCard
                    key={card.id}
                    card={card}
                ></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;