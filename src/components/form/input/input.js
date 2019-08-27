import React, {useState} from 'react'

import {InputWrapper, InputField, InputLabel} from "./input-styled";

const Input = ({label,handle, type = 'text'}) => {

    const [top,setTop] = useState(false)
    const [left,setLeft] = useState(false)
    const [font,setFont] = useState(false)
    const [colorFont,setColorFont] = useState(false)

    const focusInput = (e)=>{
        console.log(e.target.value)
        setTop(true)
        setLeft(true)
        setFont(true)
        setColorFont(true)
    }
    const blurInput = (e)=>{
        const value = e.target.value
        if (value.length == 0) {
            setTop(false)
            setLeft(false)
            setFont(false)
            setColorFont(false)
        }
        return
    }
    return (
        <InputWrapper htmlFor="">
            <InputField type={type} onChange={handle} onFocus={focusInput} onBlur={(e)=>blurInput(e)}/>
            <InputLabel top={top} left={left} font={font} colorFont={colorFont}>{label}</InputLabel>
        </InputWrapper>
    )
}

export default Input