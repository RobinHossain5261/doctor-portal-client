import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import UseAdmin from '../../hooks/UseAdmin';
import Loading from '../../Pages/Shared/Loading/Loading';

const AdminRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = UseAdmin(user?.email);
    const location = useLocation;

    if (user && isAdmin) {
        return children;
    }

    if (loading || isAdminLoading) {
        return <Loading></Loading>

    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default AdminRoute;