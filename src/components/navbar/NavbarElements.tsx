import styled from 'styled-components'
import { Link as LinkS } from 'react-scroll'

interface Props {
    scrollNav: boolean
  }

export const Nav = styled.nav`
     /* background: #E2C2B9; */
     /* background: #E2C2B9; */
     background: ${({scrollNav}:Props)=>(scrollNav?'#e2aebd':'transparent')};
     margin-top: -80px;
     height: 80px;
     width: 100%;
     margin-left:0;
     display: flex;
     justify-content: center;
     align-items: center;
     font-size: 1rem;
     position: sticky;
     top:0;
     z-index: 10;

     @media screen and(max-width:960px){
         transition: 0.8s all ease;
     }
`
export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index:1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px; 
`
export const NavLogo = styled(LinkS)`
    color:#fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size:1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
    &:hover{
        color: #fff;
        font-size:1.5rem;
    }

`
export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width:768px){
        display: block;
        position: absolute;
        top:0;
        right: 0;
        transform: translate(-100%,60%);
        font-size: 1.8rem;
        cursor: pointer;
        color:#F7F7F7;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    /* align-items: center; */
    list-style: none;
    text-align:center;
    margin-right: -22px;

    @media screen and (max-width:786px){
        display: none; 
    }
`

export const NavItem = styled.li`
    height:80px;
    font-size: 18px;
    font-weight: 500;
`
export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height:100%;
    cursor: pointer;

    &:hover{
        color: #fff;
        height:100%;
    }

    &.active{
        border-bottom: 4px solid #e4e9ff ;
        color: #fff;
        /* #F6E5F5 */
    }
`