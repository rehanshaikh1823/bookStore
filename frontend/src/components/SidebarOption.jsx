import React from 'react'
import '../styles/SidebarOption.css'
const SidebarOption = ({ active, text, Icon }) => {
    return (
        <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
            <h3>{text}</h3>
            <Icon />
        </div>
    )
}

export default SidebarOption