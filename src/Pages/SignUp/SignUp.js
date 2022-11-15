import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const handalSignUp = data => {
        console.log(data)
    }
    return (
        <div className='flex h-[800px] justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-2xl fot-bold text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit(handalSignUp)}>


                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text"
                            {...register("name", { required: "Email Address is required" })}
                            placeholder="name"
                            className="input input-bordered w-full" />
                        {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}

                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email"
                            {...register("email", { required: "Email Address is required" })}
                            placeholder="email"
                            className="input input-bordered w-full" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: 'Password must at lest 6 charecters' },
                                pattern: { value: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/, message: 'password must be stong' }
                            })}
                            placeholder="password"
                            className="input input-bordered w-full" />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    <input className='btn btn-accent w-full mt-3' value="Sign Up" type="submit" />
                </form>
                <p>Already have an account <Link to='/login' className='text-secondary'>Please login</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;