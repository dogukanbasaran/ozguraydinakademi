import React from 'react'
import { Outlet } from 'react-router'
import Header from "../components/Header"
import Footer from "../components/Footer"
import StickyContact from '../components/StickyContact'

const SharedLayout = () => {
  return (
    <div className=''>
        <Header/>
        <Outlet/>
        <Footer/>

        <StickyContact/>
    </div>
  )
}

export default SharedLayout
