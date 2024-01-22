import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderDark from '../Blocks/FirstBlock/HeaderDark'


const HomeLayoutDark:React.FC = () => {
  return (
    <div>
      <HeaderDark/>
      <Outlet/>
     
    </div>
  )
}

export default HomeLayoutDark