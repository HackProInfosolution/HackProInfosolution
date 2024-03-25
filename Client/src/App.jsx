import React from 'react'
import './App.css'
import Navbar from "./Components/Navbar.jsx"
import About from "./pages/About.jsx"
import Home from "./Components/Home.jsx"
import Footer from './Components/Footer.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {

  return (
    <Router>
      <div>
        <Navbar/>
       <Routes>
          <Route  exact path='/HackProInfosolution/' element={<Home/>}></Route>
          <Route exact path='/HackProInfosolution/about' element={ <About/> }></Route>
        </Routes> 
       </div>
       {/* <Home/> */}
       <Footer/>
      </Router>
  )
}

export default App
