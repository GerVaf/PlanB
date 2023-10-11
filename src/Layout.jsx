import React from 'react'
import Sidebar from './pages/Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='flex h-[100vh]'>
      <Sidebar/>
      <div className='flex flex-col w-5/6'>
        <Header/>
        <div className='h-[90%] scrollbar-none overflow-y-scroll'>
            {<Outlet/>}
        </div>
      </div>
    </div>
  )
}

export default Layout
