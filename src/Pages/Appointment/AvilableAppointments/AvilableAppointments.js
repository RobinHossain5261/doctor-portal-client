import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import Loading from '../../Shared/Loading/Loading';
import AppointmentOption from '../AvilableAppointments/AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';

const AvilableAppointments = ({ selectedDate }) => {
    // const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [tretment, setTrerment] = useState(null);
    const date = format(selectedDate, 'PPPP');

    const { data: appointmentOptions = [], refetch, isLoading } = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: () => fetch(`http://localhost:5000/appointmentOptions?date=${date}`)
            .then(res => res.json())
    })

    // useEffect(() => {
    //     fetch('http://localhost:5000/appointmentOptions')
    //         .then(res => res.json())
    //         .then(data => setAppointmentOptions(data))
    // }, []);

    if (isLoading) {
        return <Loading></Loading>
    }

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
                    refetch={refetch}
                ></BookingModal>
            }
        </section>
    );
};

export default AvilableAppointments;