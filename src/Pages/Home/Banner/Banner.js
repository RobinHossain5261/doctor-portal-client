import React from 'react';
import chair from '../../../assets/images/chair.png';
import PrimaryButton from '../../../component/PrimaryButton/PrimaryButton';
import bg from '../../../assets/images/bg.png';


const Banner = () => {
    return (
        <div
            style={{
                background: `url(${bg})`,

            }}
            className="hero  bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} alt="" className="lg:w-1/2 rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold text-white">Box Office News!</h1>
                    <p className="py-6 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;