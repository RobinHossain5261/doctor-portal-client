import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import peolle2 from '../../../assets/images/people2.png';
import peolle3 from '../../../assets/images/people3.png';
import Review from './Review';

const Testimonial = () => {

    const reviews = [
        {
            _id: 1,
            name: 'Robin Hossain',
            img: people1,
            des: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'Pabna'
        },
        {
            _id: 2,
            name: 'Rite Khatun',
            img: peolle2,
            des: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'Dhaka'
        },
        {
            _id: 3,
            name: 'Sumiya khatun',
            img: peolle3,
            des: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'Comilla'
        },
    ]

    return (
        <section className='my-16'>
            <div className='flex justify-between'>
                <div>
                    <h4 className="text-primary text-xl font-bold">Testimonial</h4>
                    <h1 className='text-3xl font-bold'>What Our Patients Says</h1>
                </div>
                <figure>
                    <img className='w-24' src={quote} alt="" />
                </figure>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;