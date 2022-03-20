import React from 'react'
import SidebarOption from "./SidebarOption";
import MenuBookIcon from '@mui/icons-material/MenuBook';


import '../styles/Sidebar.css'

const Sidebar = ({ categories }) => {

    return (
        <div className={'sidebar'}>
            <SidebarOption text="All Books" Icon={MenuBookIcon} active />
            {
                categories?.map((category) => {
                    console.log(category);
                    return <SidebarOption text={category} Icon={MenuBookIcon} />
                })
            }

        </div>
    )
}

export default Sidebar
