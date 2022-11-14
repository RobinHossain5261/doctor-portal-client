import React from 'react';
import titment from '../../../assets/images/treatment.png';
import PrimaryButton from '../../../component/PrimaryButton/PrimaryButton';

const DentalCare = () => {
    return (
        <div className="hero  bg-base-200 mt-16">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2'>
                    <img src={titment} alt="" className="lg:w-[450px] lg:h-[576px] rounded-lg shadow-2xl " />
                </div>
                <div className='lg:w-1/2'>
                    <h1 className="text-5xl font-bold">Exceptional Dental <br /> Care, on Your Terms</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>


    );
};

export default DentalCare;