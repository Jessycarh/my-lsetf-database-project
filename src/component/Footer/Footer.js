import React from 'react'
import styled from 'styled-components';

function Footer() {
  return (
    <Footerhold>
    <Footer1 className='Footer'>
    Copyright © Jessica Eriama 2022, All rights reserved
          
          </Footer1> 
          </Footerhold>       
  )
}

const Footerhold = styled.div `
display: flex;
justify-content: center;
align-items:center;
background-color: #0B1320;
width:100%;
height: 40px;
`

const Footer1 = styled.div `
font-size:14px;
width:80%;
color: white
`

export default Footer