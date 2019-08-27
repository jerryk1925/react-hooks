import React from 'react'

import {
    SidebarWrapper,
    SidebarScene,
    SidebarBox,
    SidebarIcon,
    SidebarLink,
    SidebarLinkItem
} from './sidebar-styled'



const Sidebar = () => {

    const Navigation = [
        {id:0, icon:'fas fa-home', link: '/', linkName: 'Home'},
        {id:1, icon:'fas fa-air-freshener', link: '/catalog', linkName: 'Catalog'}

    ]
    return (
        <SidebarWrapper>
            {Navigation.map(({id,icon,link,linkName})=>{
               return(
                   <SidebarScene key={id}>
                       <SidebarBox>
                           <SidebarIcon>
                               <i className={icon}></i>
                           </SidebarIcon>
                           <SidebarLink to={link}>
                               <p >{linkName}</p>
                           </SidebarLink>
                       </SidebarBox>
                   </SidebarScene>
               )
            })}

        </SidebarWrapper>

    )
}

export default Sidebar