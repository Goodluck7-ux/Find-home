"use client"
import { useAuth } from '@/app/context/AuthContext';
import { useRouter } from 'next/navigation';

import React, { useEffect } from 'react'
import { toast } from 'react-toastify';

export default function ProtectedRoutes({
    children,
    allowedRoles = []
}) {
    const { user, loading, isAuthenticated } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading) {
            // handle authentication
            if (!isAuthenticated) {
                router.push('/sign-in');
            }

            // role authorization
            if (allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
                router.push('/sign-in');
            }
        }
    }, [loading, isAuthenticated, user, allowedRoles]) // array of depencies will watch the variables loading,
    //  isAuthenticated and user and will run the useEffect 
    // function whenever any of these variables change

    if (loading) {
        return (
            <p className='text-center text-2xl font-bold text-gray-500'>Loading...</p>
        )
    }

    if (!isAuthenticated) {
        toast.warning("You must be signed in to access this page");
        router.push('/sign-in');
        return null; // or you can return a loading spinner or a message indicating that the user is not authenticated

    }

    return children

}
