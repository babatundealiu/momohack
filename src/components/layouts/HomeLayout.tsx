import React from 'react'
import Header from '../Blocks/FirstBlock/Header'
import { Outlet } from 'react-router-dom'


const HomeLayout:React.FC = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
     
    </div>
  )
}

export default HomeLayout