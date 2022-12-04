import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import apponment from '../../../assets/images/appointment.png';
import PrimaryButton from '../../../component/PrimaryButton/PrimaryButton';

const MakeApponment = () => {
    return (

        <div className="hero mt-40 bg-base-200 rounded-xl"
            style={{
                background: `url(${apponment})`
            }}
        >
            <div className="hero-content flex-col lg:flex-row">
                <img src={doctor} alt="" className="-mt-36 hidden md:block lg:w-1/2 rounded-lg shadow-2xl" />
                <div>
                    <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                    <h1 className="text-5xl font-bold text-white">Make an appointment Today</h1>
                    <p className="py-5 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>

    );
};

export default MakeApponment;