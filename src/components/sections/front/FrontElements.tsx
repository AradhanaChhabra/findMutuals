import styled from 'styled-components'
import { Link } from 'react-scroll'
import { MdArrowForward ,MdKeyboardArrowRight} from 'react-icons/md'

export const FirstContainer = styled.div`
    background:#a6b2ff;
    display: flex;
    justify-content:center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;

    :before{
        content: '';
        position: absolute;
        top: 0%;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg,rgba(0,0,0,0.2)0%,rgba(0,0,0,0.6)100%),
            linear-gradient(180deg,rgba(0,0,0,0.2)0%,transparent 100%) ;
        z-index: 2;
    }
    
`
export const FirstBg = styled.div`
    position:absolute;
    top:0;
    right: 0;
    bottom: 0;
    left: 0;
    inset: 0px;
    width: 100%;
    height: 100%;
    overflow: hidden;

`
export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    --o-object-fit:cover;
    object-fit:cover ;
    background: #E2C2B9;
`
export const PageContent = styled.div`
z-index:3;
max-width: 1200px;
position:absolute;
padding: 8px 24px;
display:flex;
flex-direction: column;
align-items: center;
`
export const PageH1 = styled.h1`
color:#F7F7F7;
font-size: 48px;
text-align: center;

@media screen and (max-width:768px){
    font-size:40px;
}

@media screen and (max-width:480px){
    font-size:32px;
}
`

export const PageP = styled.p`
margin-top:24px;
color: #F7F7F7;
font-size: 24px;
text-align: center;
max-width: 600px;

@media screen and (max-width:768px){
    font-size:24px;
}

@media screen and (max-width:480px){
    font-size:18px;
}
`
export const BtnWrapper = styled.div`
    margin-top:32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    `
export const ArrowForward = styled(MdArrowForward)`
    margin-left:8px;
    font-size: 20px;
`
export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left:8px;
    font-size: 20px;
`
export const ButtonF= styled(Link)`
    border-radius: 50px;
    background: #ca7c93;
    white-space: nowrap;
    padding: 10px 22px;
    color:#F4F9F9;
    font-size: 20px;
    outline: none;
    border:none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #F7F7F7;
        color:#db7e7e ;
    }

`