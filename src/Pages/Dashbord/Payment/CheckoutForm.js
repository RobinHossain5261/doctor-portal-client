import React from 'react';
import { CardElement, Elements, useElements, useStripe, loadStripe } from '@stripe/stripe-js';
import useTitle from '../../../hooks/useTitle';


const stripePromise = loadStripe(process.env.REACT_APP_STRIP_PK);
console.log(stripePromise);

const CheckoutForm = () => {

    useTitle('Checkout');

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button type="submit" disabled={!stripe}>
                Pay
            </button>
        </form>
    );
};

export default CheckoutForm;