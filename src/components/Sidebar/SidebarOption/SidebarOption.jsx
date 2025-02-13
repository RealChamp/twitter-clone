import React from "react";
import './SidebarOption.css'

function SidebarOption({active, Icon, text}) {
  return (
      <div>
          <div className={`sidebarOption ${active && 'sidebarOption--active'}`}>
            <Icon/>
            <h2>{text}</h2>
          </div>
      </div>
  )
}

export default SidebarOption;
