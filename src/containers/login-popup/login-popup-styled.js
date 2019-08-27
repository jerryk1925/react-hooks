import styled from 'styled-components';

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
    border-radius: 4px;
`
const PopupHeader = styled.header`
    text-align: right;
`

const PopupForm = styled.form`
    display:flex;

    flex-direction: column;
`
const PopupFormTitle = styled.h2`
    text-align:center;
    margin: 20px 0;
`
export {
    PopupWrapper,
    Popup,
    PopupHeader,
    PopupForm,
    PopupFormTitle
}