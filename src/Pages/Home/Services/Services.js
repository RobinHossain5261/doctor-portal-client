import React from 'react';
import fluoriod from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import ServiceCard from './ServiceCard';

const Services = () => {
    const servicesData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            des: 'Fluoride is a naturally occurring mineral that helps build strong teeth and prevent cavities.',
            img: fluoriod
        },
        {
            id: 2,
            name: 'Cavity Filling',
            des: 'Fillings treat tooth decay, preventing further damage and tooth loss, as well as the possibility of pain and infection.',
            img: cavity
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            des: 'he treatment helps to lift and even dissolve stains so that you can feel better about your appearance.',
            img: whitening
        },
    ]
    return (
        <div className='mt-16'>
            <div className='text-center'>
                <h3 className='text-xl font-bold'>OUR SERVICES</h3>
                <h1 className='text-3xl font-bold'>Services We Provide</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10'>
                {
                    servicesData.map(service => <ServiceCard
                        key={service.id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>

        </div>
    );
};

export default Services;