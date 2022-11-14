import React from 'react';

const Review = ({ review }) => {
    const { name, img, des, location } = review;
    return (
        <div className="card  shadow-xl">
            <div className="card-body">
                <p>{des}</p>
                <div className="flex items-center mt-6">

                    <div className="avatar">
                        <div className="w-16 h-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt="" />
                        </div>
                        <div className='ml-6'>
                            <h4 className='font-semibold text-lg'>{name}</h4>
                            <h5>{location}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;