import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({ children }) => {
    
    const { user, loader } = useContext(AuthContext);

    const location = useLocation();

    if (loader) {
        return <h1 className="text-5xl font-bold flex h-screen items-center justify-center"><span className="loading loading-spinner text-error w-40"></span></h1>
    }

    if (!user) {
        return <Navigate state={location.pathname} to="/login"></Navigate>
    }
    return children
};

PrivetRoute.propTypes = {
    children: PropTypes.node.isRequired
}

export default PrivetRoute;