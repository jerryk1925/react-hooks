import React, {useState, useEffect, useRef} from 'react'
import styled from 'styled-components';
import {connect} from 'react-redux'

import logo from '../../../assets/images/home/logo.jpg'

import Search from '../../../containers/search'
import LoginPopup from '../../../containers/login-popup'

import {Button} from "../../../assets/js/styled-utils";

const HeaderWrapper = styled.header`
    padding: 20px;
    background: #f6f7f9;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Logo = styled.img`
    width: 20px;
    height: 20px;
`
const Header = (state) => {

    const [popup, shopPopup] = useState(false)
    const [nameForm, setNameForm] = useState('')
    const qwe = () => {
        console.log(state)
    }
    function togglePopup (e,name) {
        shopPopup(!popup)
        if(name != undefined) setNameForm( name)
    }
    return (
        <HeaderWrapper>
            <div onClick={qwe}>
                {/*<Logo src={logo} alt="logo"/>*/}
                <i className="fas fa-ankh"></i>
                Books For Books
            </div>
            {popup}
            <Search></Search>
            <div>
                <div><a href=""></a></div>
                <div><a href=""></a></div>
                <div><a href=""></a></div>
            </div>
            <div>
                <Button background="green" color="white" onClick={(e)=>togglePopup(e,'login')}>Sing in</Button>
                <Button background="yellow" color="rgb(0,0,0)" onClick={(e)=>togglePopup(e,'reg')}>Sing up</Button>
            </div>
            {popup == true ?<LoginPopup  toggle={togglePopup} form={nameForm}> </LoginPopup>: ''}
        </HeaderWrapper>
    )
}

const mapStateToProps = (state) =>{
    return state
}
export default connect(mapStateToProps)(Header)