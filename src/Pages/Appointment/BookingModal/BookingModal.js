import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({ tretment, setTrerment, selectedDate }) => {
    const { name, slots } = tretment;
    const date = format(selectedDate, 'PPPP');

    const handaleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const booking = {
            appointmentDate: date,
            tretment: name,
            patient: name,
            slot,
            email,
            phone
        }
        alert('Booking successful')
        console.log(booking);
        setTrerment(null);
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold mb-10">{name}</h3>

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
                        <input name="name" type="text" placeholder="Your Name" className="input input-bordered  w-full mb-3" />
                        <input name="email" type="email" placeholder="Your Email" className="input input-bordered  w-full mb-3" />
                        <input name="phone" type="phone" placeholder="Your phone" className="input input-bordered  w-full mb-3" />
                        <input type="submit" value="Submit" className='w-full btn btn-accent' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;