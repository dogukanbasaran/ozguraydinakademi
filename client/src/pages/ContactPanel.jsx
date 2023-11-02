import React from 'react'
import Login from '../components/Login'

const ContactInfo = () => {




  return (
    <div className='h-[716px] justify-center px-20 flex flex-col bg-gray-950'>

        <span className='font-extrabold font-heading text-[48px] whitespace-nowrap text-neutral-300 text-center pb-2'>Özgür Aydın Akademi</span>
        <span className='font-semibold font-text text-[32px] text-neutral-300 text-center pb-24'>Yönetici İletişim Paneli</span>
        <Login/>

       
      
    </div>
  )
}

export default ContactInfo
