import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "../pages/Home"
import About from "../pages/About"
import Packages from "../pages/Packages"
import Contact from "../pages/Contact"
import SharedLayout from "../pages/SharedLayout"


import React from 'react'

const RoutePage = () => {
  return <Router>
        <Routes>
            <Route path="/" element={<SharedLayout/>}>
                <Route index element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/packages" element={<Packages/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="*" element={<div>404 page is not found.</div>}/>
            </Route>
        </Routes>
  </Router>
}

export default RoutePage
