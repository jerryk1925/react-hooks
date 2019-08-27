import styled from 'styled-components';
import { Link } from "react-router-dom";

const SidebarWrapper = styled.div`
    
`
const SidebarBox = styled.div`
    width: 100%;
    height: 100%;
    -webkit-transform-style: preserve-3d;
    -moz-transform-style: preserve-3d;
    -ms-transform-style: preserve-3d;
    transform-style: preserve-3d;
    transition: all 0.5s ease-out;
    transform-origin: 0 0;
   
`
const SidebarScene = styled.div`
    width: 90px;
    height: 100px;
    &:hover ${SidebarBox} {
      transform: rotateY(-90deg);
      cursor: pointer;
    }
`

const SidebarIcon = styled.div`
    transform: rotateY(0deg);
    background-color: #393e46;
    position: absolute;
    width: 100%;
    height: 100%;
    transform-origin: 0 0;
    display:flex;
    align-items: center;
    justify-content: center;
    color: turquoise;
`
const SidebarLink = styled(Link)`
    transform: rotateY(90deg);
    left: 90px;
    background-color: turquoise;
   text-decoration: none;
         color: #393e46;
    font-size: 0.8rem;
    position: absolute;
    width: 100%;
    height: 100%;
    transform-origin: 0 0;
    font-weight:bold;
    display:flex;
    align-items: center;
    justify-content: center;
`
const SidebarLinkItem = styled(Link)`
    
`
export {
    SidebarWrapper,
    SidebarScene,
    SidebarBox,
    SidebarIcon,
    SidebarLink,
    SidebarLinkItem
}