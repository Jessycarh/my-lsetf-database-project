import React,{useState} from 'react';
import {FaMagento} from 'react-icons/fa';
import {FaBars, FaTimes} from 'react-icons/fa';
import {Nav, NavContainer,  LogoHold,  MobileIcon,NavBar,NavLinks} from './NavBar.Element';
import {Link} from 'react-router-dom'
import Lsetf from "../NavBar/lsetflogo.png";
import Usadf from "../NavBar/usadf.png";
import styled from 'styled-components';




function Navbar() {
    const [click, setClick] = useState(false);

    const handClick = () => { 
        setClick(!click)
    }
  return (
    <>
    <Nav>
        <NavContainer>
            <LogoHold>
            <Lsetflog> <img src = {Lsetf} className = "Lsetflogo" /> </Lsetflog>
            <Usadflog> <img src = {Usadf} className = "Lsetflogo" /> </Usadflog>
            </LogoHold>

            <MobileIcon onClick={handClick}>
                {click ?<FaTimes />:<FaBars />}
            </MobileIcon>
            <NavBar onClick={handClick} click={click}>
                <NavLinks>Home</NavLinks>
                

            </NavBar>
           
        </NavContainer>
    </Nav>
    
    </>     
    
  )
}

const Lsetflog =styled.div`
img {
width: 80px;
height:40px;
}`

const Usadflog =styled.div`
img {
width: 80px;
height:40px;
}`

export default Navbar



