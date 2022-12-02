import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useTitle from '../../hooks/useTitle';
import useToken from '../../hooks/useToken';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signIn, providerLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();

    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);

    useTitle('Login');

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    if (token) {
        navigate(from, { replace: true });
    }

    const handaleLogIn = data => {
        setLoginError(' ');

        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;

                setLoginUserEmail(data.email);

            })
            .catch(error => {
                console.error(error);
                setLoginError(error.message)

            })
    }

    const handaleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error))
    }

    return (
        <div className='flex h-[800px] justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-2xl fot-bold text-center'>Login</h2>
                <form onSubmit={handleSubmit(handaleLogIn)}>


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
                                minLength: { value: 6, message: 'Password must at lest 6 charecters' }
                            })}
                            placeholder="password"
                            className="input input-bordered w-full" />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                        <label className="label">
                            <span className="label-text">Forget Password?</span>
                        </label>
                    </div>
                    {
                        loginError && <p className='text-red-600'>{loginError}</p>
                    }
                    <input className='btn btn-accent w-full' value="Log In" type="submit" />
                </form>
                <p>New to Doctors Portal? <Link to='/signUp' className='text-secondary'>Create new account</Link></p>
                <div className="divider">OR</div>
                <button onClick={handaleGoogleSignIn} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;