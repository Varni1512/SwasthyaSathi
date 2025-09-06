import React from 'react'
import Header from './_components/Header';

const DashboardLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div>
            <Header />
            <div className='px-5 md:px-20 lg:px-40 py-10'>
                {children}
            </div>

        </div>
    )
}

export default DashboardLayout
