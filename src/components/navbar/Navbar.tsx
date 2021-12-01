import React, { useEffect, useState,useRef}from 'react'
import { MobileIcon, Nav, NavbarContainer,NavItem, NavLinks, NavLogo, NavMenu } from './NavbarElements'
import { FaBars } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll';

const Navbar:React.FC<any>=({ toggle })=> {
    const isScreenMounted = useRef(true);
    
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(!isScreenMounted.current) return;
        if (window.scrollY >= 80)
            setScrollNav(true);
        else
            setScrollNav(false);
    }

    useEffect(() => {


        // const abortController = new AbortController();
        if (!isScreenMounted.current) return;
        else 
        window.addEventListener('scroll', changeNav)
        return () => {
            // abortController.abort()  
            isScreenMounted.current = false
          }
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <>
            <Nav scrollNav={scrollNav} id="nav">
                <NavbarContainer>
                    <NavLogo to="nav" onClick={toggleHome}>
                        Degrees of Separation
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks
                                to="people"
                                duration={500}
                                spy={true}
                                offset={-80}
                                // or add activeClass if not using styledComponents &.active
                                // smooth={true}
                                delay={0}
                                smooth={true}
                            >
                                Add People
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                                to="relationship"
                                duration={500}
                                spy={true}
                                offset={-80}
                                // smooth={true}
                                delay={0}
                                smooth={true}
                            >Set Relationship
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                                to="connection"
                                delay={0}
                                smooth={true}
                                duration={500}
                                spy={true}
                                offset={-80}
                                >
                                Find Connection
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer> 
                </Nav>
        </>
    )
}

export default Navbar