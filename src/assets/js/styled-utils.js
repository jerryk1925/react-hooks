import styled from 'styled-components';

const Button = styled.button`
    background: ${props => props.background};
    color: ${props=> props.color};
    cursor:pointer;
    outline: none;
    border: none;
    border-radius: 6px;
    padding: 5px 10px;
`

const Link = styled.a`
    background: ${props => props.background};
    color: ${props=> props.color};
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