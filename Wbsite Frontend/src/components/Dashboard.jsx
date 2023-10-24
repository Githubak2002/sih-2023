import { useState } from 'react'
import './Dashboard.css'
import Dash_header from './Dash_header'
import Dash_sidebar from './Dash_sidebar'
import Dash_home from './Dash_home'

function Dashboard() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <main className='grid-container'>
      <Dash_header OpenSidebar={OpenSidebar}/>
      <Dash_sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Dash_home />
    </main>
  )
}

export default Dashboard