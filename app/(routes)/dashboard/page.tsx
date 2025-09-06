import React from 'react'
import HistoryList from './_components/HistoryList'
import { Button } from '@/components/ui/button'
import DoctorAgentList from './_components/DoctorAgentList'
import AddNewSessionDialog from './_components/AddNewSessionDialog'

const Workspace = () => {
  return (
    <div>
        <div className='flex items-center justify-between'>
            <h2 className='font-bold text-lg md:text-2xl'>My Dashboard</h2>
            <AddNewSessionDialog />
        </div>
      <HistoryList />
      <DoctorAgentList />
    </div>
  )
}

export default Workspace
