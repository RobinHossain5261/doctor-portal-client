import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';

const Payment = () => {

    useTitle('Payment');

    const booking = useLoaderData();
    const { appointmentDate, tretment, price } = booking;
    return (
        <div>
            <h3 className="text-3xl mb-5 text-primary">Payment for {tretment}.</h3>
            <h4 className="text-xl">Please pay <strong>${price}</strong> for your appointment on <strong>{appointmentDate}</strong></h4>
        </div>
    );
};

export default Payment;