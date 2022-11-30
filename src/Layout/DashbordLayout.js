import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import UseAdmin from '../hooks/UseAdmin';
import NavBar from '../Pages/Shared/NavBar/NavBar';

const DashbordLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = UseAdmin(user?.email);
    return (
        <div>
            <NavBar></NavBar>
            <div className="drawer drawer-mobile">
                <input id="dashbord-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashbord-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                        <li><Link to="/dashbord">My Appointment</Link></li>
                        {
                            isAdmin &&
                            <li><Link to="/dashbord/allusers">All users</Link></li>
                        }


                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashbordLayout;