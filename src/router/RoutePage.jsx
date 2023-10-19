import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "../pages/Home"
import SharedLayout from "../pages/SharedLayout"


import React from 'react'

const RoutePage = () => {
  return <Router>
        <Routes>
            <Route path="/" element={<SharedLayout/>}>
                <Route index element={<Home/>}/>
                <Route path="*" element={<div>404 page is not found.</div>}/>
            </Route>
        </Routes>
  </Router>
}

export default RoutePage
