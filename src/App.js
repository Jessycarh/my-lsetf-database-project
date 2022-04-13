import React from 'react'
import Home from './component/Home/Home';
import Students from './component/Students/Students';
import Navbar from './component/NavBar/Navbar';
import $Footer from './component/Footer/Footer';
import GlobalStyle from './GlobalStyle';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App () {
  return(
    <>
      <Router>
        <Navbar />
        <GlobalStyle/>
        <Home/>
        <Students/>
        <$Footer/>
        <Routes>
       
        </Routes>
      </Router>
    </>
  )
}

export default App

