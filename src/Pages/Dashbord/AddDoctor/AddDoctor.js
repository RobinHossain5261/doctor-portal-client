import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const imageHostKey = process.env.REACT_APP_image_key;
    const navigate = useNavigate();

    const { data: specialities, isLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/appointmentSpecilaty`);
            const data = await res.json();
            return data;
        }
    })

    const handaleAddDoctor = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url)
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specilaty,
                        image: imgData.data.url
                    }
                    // save doctor information to the database
                    fetch('http://localhost:5000/doctors', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success(`Doctor added successfully.`);
                            navigate('/dashbord/managedoctors');
                        })
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h3 className="text-3xl mb-5">Add A New Doctor</h3>
            <form onSubmit={handleSubmit(handaleAddDoctor)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text"
                        {...register("name", { required: "Name is required" })}
                        placeholder="name"
                        className="input input-bordered w-full" />
                    {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email"
                        {...register("email", { required: "Email Address is required" })}
                        placeholder="email"
                        className="input input-bordered w-full" />
                    {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                </div>

                <div>
                    <label className="label">
                        <span className="label-text">Specilaty</span>
                    </label>
                    <select
                        {...register('specilaty', { required: true })}
                        className="select select-bordered w-full max-w-xs">
                        {
                            specialities.map(specilaty => <option
                                key={specilaty._id}
                                value={specilaty.name}
                            >{specilaty.name}</option>)
                        }
                    </select>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input type="file"
                        {...register("image", { required: "Image is required" })}
                        className="input input-bordered w-full" />
                    {errors.image && <p className='text-red-600'>{errors.image?.message}</p>}

                </div>


                <input className='btn btn-accent w-full max-w-xs mt-3' value="Add Doctor" type="submit" />
            </form>
        </div>
    );
};

export default AddDoctor;