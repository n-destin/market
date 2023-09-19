import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';

const RequireAuthentication = ({children})=>{
    const authenticated =  useSelector(store => {return store.user.authenticated})
    console.log(authenticated);
    if(authenticated) return children;
    else return <Navigate to="/login" />
}

export default RequireAuthentication;