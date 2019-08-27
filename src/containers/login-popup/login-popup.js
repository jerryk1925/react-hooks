import React, {useState,useRef} from 'react'

import {useOutside} from '../../hooks'
import {
    PopupWrapper,
    Popup,
    PopupHeader,
    PopupForm,
    PopupFormTitle
}
from './login-popup-styled'
import {Button} from "../../assets/js/styled-utils";
import Input from '../../components/form/input'

const LoginPopup =({toggle,form})=>{
    const node = useRef();

    useOutside(node,toggle)
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')
        return(
            <PopupWrapper >
                <Popup ref={node}>
                    <PopupHeader>
                        {/*<span>Попап ниче так {email} {password}</span>*/}
                        <span onClick={toggle}><i className="fas fa-times"></i></span>
                    </PopupHeader>
                    {
                        form == 'login'?
                            <PopupForm action=''>
                                <PopupFormTitle>Зайди и будет круто</PopupFormTitle>
                                <Input label={'Email'} handle={(e)=>setEmail(e.target.value)}/>
                                <Input type={'password'} label={'Password'} handle={(e)=>setPassword(e.target.value)}/>
                                {/*<input type="text" onChange={(e)=>setEmail(e.target.value)}/>*/}
                                {/*<input type="text" onChange={(e)=>setPassword( e.target.value)}/>*/}
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