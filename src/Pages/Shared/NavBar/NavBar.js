import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handaleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }
    const menuItem = <>
        <li><Link className='hover:text-primary' to="/">Home</Link></li>
        <li><Link className='hover:text-primary' to="/appointment">Appointment</Link></li>
        {
            user?.uid ?
                <>
                    <li><Link className='hover:text-primary' to="/dashbord">Dashbord</Link></li>
                    <li><Link onClick={handaleLogOut} className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white font-bold mt-2 lg:ml-3 rounded-xl hover:from-cyan-500 hover:to-emerald-500">Log Out</Link></li>
                </>
                : <>
                    <li><Link className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white font-bold ml-3 rounded-xl hover:from-cyan-500 hover:to-emerald-500" to="/login">Log In</Link></li>
                    <li><Link className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white font-bold ml-3 rounded-xl hover:from-cyan-500 hover:to-emerald-500" to="/signUp">Sign Up</Link></li>
                </>
        }
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItem}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">Doctors-portal</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItem}
                </ul>
            </div>
            <label htmlFor="dashbord-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        </div>
    );
};

export default NavBar;