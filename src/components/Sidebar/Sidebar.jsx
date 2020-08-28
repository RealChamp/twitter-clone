import React from 'react'
import './Sidebar.css'
import {
  BookmarkBorder,
  Home,
  ListAlt,
  MailOutline,
  MoreHoriz,
  NotificationsNone,
  PermIdentity,
  Search,
  Twitter
} from "@material-ui/icons"
import {Button} from '@material-ui/core'
import SidebarOption from './SidebarOption/SidebarOption';

function Sidebar() {
  return (
      <div className="sidebar">
        {/*  Twitter Logo */}
            <Twitter className='sidebar__twitterIcon'/>
        {/* SidebarOption */}
        <SidebarOption active text='Home' Icon={Home}/>
        <SidebarOption text='Search' Icon={Search}/>
        <SidebarOption text='Notification' Icon={NotificationsNone}/>
        <SidebarOption text='Messages' Icon={MailOutline}/>
        <SidebarOption text='Bookmarks' Icon={BookmarkBorder}/>
        <SidebarOption text='Lists' Icon={ListAlt}/>
        <SidebarOption text='Profile' Icon={PermIdentity}/>
        <SidebarOption text='More' Icon={MoreHoriz}/>
        {/*Button => tweet*/}
        <Button variant='outlined' className='sidebar__tweet' fullWidth>Tweet</Button>
      </div>
  )
}

export default Sidebar;