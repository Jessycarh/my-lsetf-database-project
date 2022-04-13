import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {collection, getDocs} from 'firebase/firestore';
import {database,storage} from "./Base";
import {async} from "@firebase/util";

function Students() {
    const [lsetf,setlsetf] = useState ([]);
    const usersCollectionRef = collection(database, "student")
    const [facebook] =useState ([]);
    const [github] =useState ([]);
    const [linkedin] =useState ([]);
    const [email] =useState ([]);
    const [whatsapp]= useState ([]);

    // DEFINE DATABASE
    

    // GET DATA FUNCTION
    const getData = async () => {
        const data = await getDocs(usersCollectionRef)
        setlsetf(data.docs.map((doc) => ({...doc.data(), id:doc.id})));
    }
//    USE EFFECT 
    useEffect(() => {
        getData();
    }, []);

  return (
    <Studentcard> STUDENTS
        <Studentdiv>
         {lsetf.map((props) => ( 
        
        <Studenthold>
           <Studimg><img style={{height:"100px"}} src={props.image} alt="img"/> </Studimg>
           <Studname><strong> Name: </strong> {props.name} </Studname>
           <Studesc> <strong> Description: </strong> {props.description} </Studesc>
          <Studentlink> 
            <a href = {props.facebook}> <i className = "fa-brands fa-facebook"></i> </a>
           <a href = {props.linkedin}> <i className = "fa-brands fa-linkedin"></i> </a>
           <a href = {props.github}> <i className = "fa-brands fa-github"></i> </a>
           <a href = {props.whatsapp}> <i className = "fa fa-whatsapp"></i> </a>
           <a href = {props.email}> <i className = "fa-solid fa-envelope"></i> </a>
           </Studentlink>
        </Studenthold> 

        // {lsetf.map(({image, name, email, description, github, linkedin, facebook, whatsapp}) => (
        // 
            /*<Studenthold>
               <studname>Name:{name} </studname>
               <studimg><img style={{height:"100px"}} src={image} alt="img"/> </studimg>
               <studesc> <strong> Description: </strong> {description} </studesc>
               <a href = {facebook}> <i className = "fa-brands fa-facebook"></i> </a>
               <a href = {linkedin}> <i className = "fa-brands fa-linkedin"></i> </a>
               <a href = {github}> <i className = "fa-brands fa-github"></i> </a>
               <a href = {whatsapp}> <i className = "fa fa-whatsapp"></i> </a>
               <a href = {email}> <i className = "fa-solid fa-envelope"></i> </a>
            </Studenthold> */
        ))}
           </Studentdiv> 
    </Studentcard>
  )
}
const Studentcard =styled.div`
padding:4rem;
font-size: 40px;
font-weight: bold;
background: white;
color:purple;
 `

 const Studentdiv = styled.div`
 display:flex;
 flex-wrap: wrap;
 justify-content: center;
 align-items:center;
 background-color: white;
 `

 const Studenthold = styled.div`
 color: white;
 background-color: purple;
 margin: 2rem 2rem 2rem 0;
 padding: 1.5rem;
 width: 250px;
 font-size: 14px;
 font-weight:normal;
 box-shadow: 1px 1px 1px #FFFAFA;
 // rgba(0,0,0,0.1);
 transition: transform .1s ease;
 cursor: pointer;
 
 :hover {
     transform: scale(1.2);
 }
 `
const Studimg = styled.div`
img {
width: 120px;
height:250px;
}`

const Studname = styled.div`

`

const Studesc = styled.div`
`

const Studentlink = styled.div`
 display: flex;
 justify-content: space-around;
    a{
      width: 30px;
      height:30px;
      border-radius: 50%;
      color: white;
      :hover{
        color: green;
        transform: scale(1.2);
      }
    }
 `



export default Students