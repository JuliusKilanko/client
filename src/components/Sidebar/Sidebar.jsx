import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import InventoryIcon from '@mui/icons-material/Inventory';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import LogoutIcon from '@mui/icons-material/Logout';
import LightbulbCircleIcon from '@mui/icons-material/LightbulbCircle';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import './sidebar.css'
import { useState } from 'react';

function Sidebar() {
  const [openNav, setOpenNav]= useState(false)

  function handleOpenNav(){
    setOpenNav(!openNav)
  }
  return (
    <div>
      <div onClick={handleOpenNav} className={`'w-fit m-0 p-0'`}>
      <MenuIcon className='cursor-pointer'/>
      </div>
    <div className='general'>
      <div className={`bg-slate-100 ${openNav ? "sidebar" : 'active'}`}>
        <div className='top py-3'>
          <h1 className='text-xl font-bold'>BMW Car's</h1>
        </div>
        <div className='center'>
        <ul>
                <p className='title'>MAIN</p>
                    <Link to='/'>
                    <li>
                    <DashboardIcon className="icon"/>
                    <span>Dashboard</span>
                    </li>
                    </Link>
                    <p className='title'>LISTS</p>
                    <Link to='/users' className='link'>
                    <li>
                    <PersonIcon className="icon"/>
                    <span>Users</span>
                    </li>
                    </Link>
                    <Link to='/products'>
                    <li>
                    <StoreMallDirectoryIcon className="icon"/>
                    <span>Products</span>
                    </li>
                    </Link>
                    <li>
                    <InventoryIcon className="icon"/>
                    <span>Orders</span>
                    </li>
                    <li>
                    <LocalShippingIcon className="icon"/>
                    <span>Delivery</span>
                    </li>
                    <p className='title'>USEFULL</p>
                    <li>
                    <AnalyticsIcon className="icon"/>
                    <span>Stats</span>
                    </li>
                    <li>
                    <CircleNotificationsIcon className="icon"/>
                    <span>Notifications</span>
                    </li>
                    <p className='title'>SERVICE</p>
                    <li>
                    <SettingsSystemDaydreamIcon className="icon"/>
                    <span>System Health</span>
                    </li>
                    <li>
                    <LightbulbCircleIcon className="icon"/>
                    <span>Logs</span>
                    </li>
                    <li>
                    <SettingsSuggestIcon className="icon"/>
                    <span>Settings</span>
                    </li>
                    <p className='title'>USER</p>
                    <li>
                    <AccountCircleIcon className="icon"/>
                    <span>Profile</span>
                    </li>
                    <li>
                    <LogoutIcon className="icon" />
                    <span>Logout</span>
                    </li>
            </ul>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Sidebar