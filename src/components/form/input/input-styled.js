import styled from 'styled-components';

const InputWrapper = styled.label`
    position: relative;
    padding-bottom: 20px;
`

const InputField = styled.input`
    border: none;
    padding: 10px 15px;
    border-radius: 4px;
    background: #f6f7f9;
    outline:none;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #f6f7f9;
    transition: all 0.3s;
    &:focus{
        transition: all 0.3;
        border: 1px solid turquoise;
    }
`

const InputLabel = styled.span`
    position:absolute;
    left:${props => !props.left ? '15px': '0'};
    top: ${props => !props.top ? '10px': '-15px'};
    font-size: ${props => !props.font ? '16px': '12px'};
    color: ${props => !props.colorFont ? 'grey' : 'turquoise'};
    transition: .3s;
`

export {
    InputWrapper,
    InputField,
    InputLabel
}