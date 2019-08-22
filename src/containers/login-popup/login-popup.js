import React, {useState,useRef} from 'react'
import styled from 'styled-components';

import {Button} from "../../assets/js/styled-utils";
import {useOutside} from '../../hooks'

const PopupWrapper = styled.section`
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    display:flex;
    align-items: center;
    justify-content: center;
    background: rgba(0,0,0,.3);
`

const Popup = styled.div`
    background: white;
    min-width: 400px;
    padding: 20px;
`
const PopupHeader = styled.header`
    display: flex;
    align-items:center;
    justify-content: space-between;
`

const PopupForm = styled.form`
    display:flex;

    flex-direction: column;
`

const LoginPopup =({toggle,form})=>{
    const node = useRef();

    useOutside(node,toggle)
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')
        return(
            <PopupWrapper >
                <Popup ref={node}>
                    <PopupHeader>
                        <span>Попап ниче так {email} {password}</span>
                        <span onClick={toggle}><i className="fas fa-times"></i></span>
                    </PopupHeader>
                    {
                        form == 'login'?
                            <PopupForm action=''>
                                <h2>Зайди и будет круто</h2>
                                <input type="text" onChange={(e)=>setEmail(e.target.value)}/>
                                <input type="text" onChange={(e)=>setPassword( e.target.value)}/>
                                <Button onClick={toggle}>Sing in</Button>
                            </PopupForm>:
                            <PopupForm action=''>
                                <h2>Зарегайся и будет круто</h2>
                                <input type="text"/>
                                <input type="text"/>
                                <input type="text"/>
                                <Button onClick={toggle}>Sing up</Button>
                            </PopupForm>
                    }

                </Popup>
            </PopupWrapper>
        )
}

export default LoginPopup