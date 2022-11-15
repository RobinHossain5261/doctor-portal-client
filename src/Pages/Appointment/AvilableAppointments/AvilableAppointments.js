import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOption from '../AvilableAppointments/AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';

const AvilableAppointments = ({ selectedDate }) => {
    const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [tretment, setTrerment] = useState(null);

    useEffect(() => {
        fetch('appointmentOptions.json')
            .then(res => res.json())
            .then(data => setAppointmentOptions(data))
    }, []);
    return (
        <section className='my-16'>
            <p className='font-semibold text-center text-secondary'>Available Appointments on {format(selectedDate, 'PPPP')}</p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10'>
                {
                    appointmentOptions.map(option => <AppointmentOption
                        key={option._id}
                        option={option}
                        setTrerment={setTrerment}
                    ></AppointmentOption>)
                }
            </div>
            {
                tretment &&
                <BookingModal
                    selectedDate={selectedDate}
                    tretment={tretment}
                    setTrerment={setTrerment}
                ></BookingModal>
            }
        </section>
    );
};

export default AvilableAppointments;