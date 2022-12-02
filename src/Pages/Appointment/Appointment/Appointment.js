import React, { useState } from 'react';
import useTitle from '../../../hooks/useTitle';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvilableAppointments from '../AvilableAppointments/AvilableAppointments';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    useTitle('Appointment');

    return (
        <div>
            <AppointmentBanner
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            ></AppointmentBanner>
            <AvilableAppointments
                selectedDate={selectedDate}
            ></AvilableAppointments>
        </div>
    );
};

export default Appointment;