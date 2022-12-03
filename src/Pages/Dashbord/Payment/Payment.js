import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import ChackoutForm from './ChackoutForm';


const stripePromise = loadStripe(process.env.REACT_APP_STRIP_PK);

const Payment = () => {
    useTitle('Payment');

    const booking = useLoaderData();

    const { appointmentDate, tretment, price, slot } = booking;


    return (
        <div>
            <h3 className="text-3xl mb-5 text-primary">Payment for {tretment}.</h3>
            <h4 className="text-xl">Please pay <strong>${price}</strong> for your appointment on <strong>{appointmentDate}</strong> at {slot}.</h4>

            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <ChackoutForm
                        booking={booking}
                    ></ChackoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;