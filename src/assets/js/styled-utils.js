import styled from 'styled-components';

const Button = styled.button`
    background: ${props => props.background};
    color: ${props => props.color};
    cursor:pointer;
    outline: none;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    &:active{
     box-shadow: inset 0 4px 8px rgba(0, 0, 0, 0.35);
     transition: .3s;
    }
    transition: .3s;

`

const Link = styled.a`
    background: ${props => props.background};
    color: ${props => props.color};
    cursor:pointer;
    outline: none;
    border: none;
    border-radius: 6px;
    padding: 5px 10px;
`

export {
    Button,
    Link
}