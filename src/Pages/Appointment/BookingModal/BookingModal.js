import React, { useContext } from 'react';
import { format } from 'date-fns';
import { AuthContext } from '../../../contexts/AuthProvider';
import toast from 'react-hot-toast';

const BookingModal = ({ tretment, setTrerment, selectedDate, refetch }) => {
    const { name: tretmentName, slots, price } = tretment;
    const date = format(selectedDate, 'PPPP');
    const { user } = useContext(AuthContext);

    const handaleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const booking = {
            appointmentDate: date,
            tretment: tretmentName,
            patient: name,
            slot,
            email,
            phone,
            price
        }

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    setTrerment(null);
                    toast.success('Booking Confirmed');
                    refetch();
                }
                else {
                    toast.error(data.message);
                }

            })
        // console.log(booking);

    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold mb-10">{tretmentName}</h3>

                    <form onSubmit={handaleBooking}>
                        <input type="text" disabled value={date} className="input input-bordered  w-full mb-3" />
                        <select name="slot" className="select select-bordered w-full mb-3">
                            {
                                slots.map((slot, i) => <option
                                    value={slot}
                                    key={i}
                                >{slot}</option>)
                            }

                        </select>
                        <input name="name" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input input-bordered  w-full mb-3" />
                        <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Your Email" className="input input-bordered  w-full mb-3" />

                        <input name="price" type="text" defaultValue={`Booking price: $${price}`} disabled className="input input-bordered  w-full mb-3" />

                        <input name="phone" type="phone" placeholder="Type your phone number" className="input input-bordered  w-full mb-3" />

                        <input type="submit" value="Submit" className='w-full btn btn-accent' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;