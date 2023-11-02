import React from 'react'
import Login from '../components/Login'
import { useLocation, useNavigate } from 'react-router'
import ContactsData from "../components/ContactsData"

const ContactInfo = () => {

    const location = useLocation();


  return (
    <div className='h-[auto] pt-36 justify-center px-20 flex flex-col'>


        <Login/>

       
      
    </div>
  )
}

export default ContactInfo
