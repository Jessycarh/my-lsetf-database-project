import React from 'react'
import styled from 'styled-components'

function Home() {
  return (
    <Homediv>
      <Homediv1>
        <Hero1 className="Hero1"> 
        <Lsetf1 className="Heads"> MY LSETF PROJECT </Lsetf1>
         <br/>
         <Lsetf2 className="PMan"> Welcome to LSETF Beneficiaries Database for Software Engineering class Cohort 5. This database contains the profile and contact information of beneficiaries from cohort 5. 
         <br/>
         <br/>
         You can contact any beneficiary by viewing and clicking the links below their icons.  
           </Lsetf2>

          </Hero1>
          </Homediv1>
          </Homediv>
  )
}
const Homediv = styled.div`
display: flex;
justify-content: center;
align-items: center;

color: purple;
width:100%;
height: 350px;
`

const Homediv1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80%;
  width: 80%;
  

`
const Hero1 = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: center;
  height: 100%;
  width: 80%;
  
`

const Lsetf1 = styled.div`
  font-size: 40px;
  font-weight: bolder;
`
const Lsetf2 = styled.div`
  font-size: 14px;

`

export default Home