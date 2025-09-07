import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import path from 'path'
import React from 'react'

const menuOptions = [
    {
        id: 1,
        name: 'Home',
        path: '/home'
    },
    {
        id: 2,
        name: 'History',
        path: '/history'
    },
    {
        id: 3,
        name: 'Profile',
        path: '/profile'
    }
]

const Header = () => {
    return (
        <div className='flex items-center justify-between p-4 shadow px-10 md:px-20 lg:px-40'>
            <Image src={'/logo.png'} alt="Logo" width={180} height={90} />
            <div className='hidden md:flex gap-12 items-center'>
                {menuOptions.map((option, index) => (
                    <div key={index}>
                        <h2 className='hover:font-bold cursor-pointer transition-all duration-200'>{option.name}</h2>
                    </div>
                ))}
            </div>
            <UserButton />
        </div>
    )
}

export default Header
