import { Navigate } from 'react-router-dom';

const ProtectedRoute = function(props) {
    const {auth, usersFor = ["anon"], children, redirect = ""} = props;

    if(usersFor.includes(auth)) {
        return children;
    };
    
    return <Navigate to={redirect} />;
};

export default ProtectedRoute;