import React, { useContext } from 'react';
import { Link, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import useTitle from '../../../hooks/useTitle';

const DisplayError = () => {
    useTitle('Error');

    const { logOut } = useContext(AuthContext);
    const error = useRouteError();
    const handaleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <p className='text-red-500'>Somtheings went wrong!!!</p>
            <p className='text-red-400'>{error.statusText || error.message}</p>
            <h2 className="text-3xl"> Please
                <Link onClick={handaleLogOut} className='btn btn-accent'>Log Out</Link>
            </h2>
        </div>
    );
};

export default DisplayError;