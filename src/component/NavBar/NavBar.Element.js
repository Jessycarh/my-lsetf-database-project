import styled from 'styled-components';


export const Nav = styled.nav`
display: flex;
height: 80px;
justify-content: center;
align-items: center;
position: sticky;
top: 0;
z-index: 999;
background-color: #ffffff;
`
export const NavContainer = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
margin-right: auto;
margin-left: auto;
height: 80px;
z-index: 1;
color: #333333;
align-items: center;
font-size: 25px;

`

export const LogoHold = styled.div`
margin-left: 20px;
display: flex;
flex-wrap: wrap;
`

export const MobileIcon = styled.div`
display: none;
@media screen and (max-width: 850px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
}
`

export const NavBar = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
width: 100px;
justify-content: space-between;
padding-right: 30px;
font-weight: bold;
@media screen and (max-width: 850px){
    display: flex;
    flex-direction: column;
    position: absolute;
    padding-right: 0;
    top:50px;
    height: 80vh;
    justify-content: flex-start;
    width: 100%;
    background: white;
    left: ${({click}) => (click? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
}
@media screen and (max-width: 425px){
    padding:0;
}
`

export const NavLinks = styled.div`
font-size: 18px;
cursor: pointer;
&:hover{
    border-bottom: 2px solid whitesmoke;
}
@media screen and (max-width : 850px){
    margin-top: 20px;
    
}`
