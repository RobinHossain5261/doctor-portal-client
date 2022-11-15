import React from 'react';
import chair from '../../../assets/images/chair.png';
import bg from '../../../assets/images/bg.png';
import { DayPicker } from 'react-day-picker';

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {

    return (
        <div className='py-10'
            style={{
                background: `url(${bg})`
            }}
        >
            <div className="hero " >
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='w-full lg:w-1/2'>
                        <img src={chair} alt="" className=" rounded-lg shadow-2xl" />
                    </div>
                    <div className='w-full lg:w-1/2'>
                        <DayPicker
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;