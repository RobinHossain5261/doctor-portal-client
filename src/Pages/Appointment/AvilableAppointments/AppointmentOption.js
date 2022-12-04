import React from 'react';

const AppointmentOption = ({ option, setTrerment }) => {
    const { name, slots, price } = option;
    return (
        <div className="card  shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-2xl font-bold  text-secondary">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try another day'}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} avilable</p>
                <p>Price : ${price}</p>
                <div className="card-actions justify-center">
                    <label htmlFor="booking-modal"
                        disabled={slots.length === 0}
                        className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white font-bold hover:from-cyan-500 hover:to-emerald-500"
                        onClick={() => setTrerment(option)}
                    > Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;