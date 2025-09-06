"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useUser } from '@clerk/nextjs';
import { UserDetailContext } from '@/context/UserDetailContext';

export type UserDetail = {
    name : string,
    email: string
}

const Provider = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {

    const {user} = useUser();
    const [UserDetail,setUserDetail] = useState<any>()

    useEffect(()=>{
        user&&CreateNewUser();
    },[user])

    const CreateNewUser = async () => {
        const result = await axios.post('/api/users');
        console.log(result.data);
        setUserDetail(result.data)
    }

    return (
        <div>
            <UserDetailContext.Provider value={{UserDetail,setUserDetail}}>
                {children}
            </UserDetailContext.Provider>
            
        </div>
    )
}

export default Provider
