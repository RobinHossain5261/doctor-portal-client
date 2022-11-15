import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvilableAppointments from '../AvilableAppointments/AvilableAppointments';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
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