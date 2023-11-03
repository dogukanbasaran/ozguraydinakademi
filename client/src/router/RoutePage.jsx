import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "../pages/Home"
import About from "../pages/About"
import Packages from "../pages/Packages"
import Contact from "../pages/Contact"
import PanelLogin from "../pages/PanelLogin";
import PanelDashBoard from "../pages/PanelDashboard"
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
                <Route path="*" element={<div className="text-center text-6xl font-heading h-[500px] pt-48">404 page is not found.</div>}/>
            </Route>
            <Route path="/panel" element={<PanelLogin/>}/>
            <Route path="/panel/dashboard" element={<PanelDashBoard/>}/>
        </Routes>
  </Router>
}

export default RoutePage
