import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../contexts/AuthProvider';
import toast from 'react-hot-toast';
import { GoogleAuthProvider } from 'firebase/auth';
import useToken from '../../hooks/useToken';
import useTitle from '../../hooks/useTitle';


const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, updateUser, providerLogin } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const googleProvider = new GoogleAuthProvider();

    useTitle('SignUp');

    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();

    if (token) {
        navigate('/');
    }

    const handalSignUp = data => {
        console.log(data);
        setSignUpError(' ');

        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Usear careate sussecfully');
                const userInfo = {
                    displayName: data.name
                }

                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email);

                    })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                console.error(error);
                setSignUpError(error.message)
            });
    }
    const handaleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.error(error))
    }

    const saveUser = (name, email) => {
        const user = { name, email };
        fetch(`https://doctors-portal-server-vert.vercel.app/users`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreatedUserEmail(email);

            })
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
                            {...register("name", { required: "Name is required" })}
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
                                pattern: { value: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/, message: 'password must one upperCase, lowerCase and number' }
                            })}
                            placeholder="password"
                            className="input input-bordered w-full" />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    {
                        signUpError && <p className='text-red-600'>{signUpError}</p>
                    }
                    <input className='btn btn-accent w-full mt-3' value="Sign Up" type="submit" />
                </form>
                <p>Already have an account <Link to='/login' className='text-secondary'>Please login</Link></p>
                <div className="divider">OR</div>
                <button onClick={handaleGoogleSignIn} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;