import React, { useContext } from 'react';
import { AuthContext } from '../../conteccts/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const Logout = () => {
    const {logOut} = useContext(AuthContext)

    const location = useLocation();
    const navigate = useNavigate();
  
    const from = location.state?.from?.pathname || "/";

    const handleLogOut = () => {
         logOut()
         .then(() => {
            alert('logged out successfully');
            navigate(from, { replace: true });
         })
         .catch(() => {

         })
    }
    return (
        <div className='h-screen bg-teal-100 flex items-center justify-center'>
            <button onClick={handleLogOut} className='bg-red-700 px-8 py-2 text-white rounded'>LogOut</button>
        </div>
    );
};

export default Logout;