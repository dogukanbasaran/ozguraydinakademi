import React, {useState, useEffect} from 'react'
import PanelContactData from '../components/PanelContactData'
import axios from 'axios'
import photo from '../assets/profile/IMG_20190819_133506_876.jpg'
import {IoIosLogOut} from 'react-icons/io'
import { useNavigate } from 'react-router';


const ContactDashboard = () => {

  const navigate = useNavigate();

  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3001/getUsers")
    .then(users => setUsers(users.data))
    .catch(err => console.log(err))
  },[])

  const handleLogout = () => {
    navigate("/panel")
  }



  return (
    <div className='bg-gray-950'>

    <div className='h-[100px] bg-gray-800 text-neutral-300 flex items-center justify-between fixed w-full border-b-[0.5px]'>
      <div id='logo' className='pl-5 flex flex-col text-center'>
            <span className='font-extrabold font-heading text-[24px] whitespace-nowrap'>Özgür Aydın Akademi</span>
            <span className='font-semibold font-text text-[16px] whitespace-nowrap'>Yönetici Paneli</span>
      </div>
      <div className='flex items-center pr-5 gap-6'>
        <div id='userProfile' className='flex justify-start items-center h-[100px] pl-5'>
            {
              users.map(user => {
                return(
                  <div className='flex items-center gap-2 ' key={user._id}>
                  <img src={photo} className='w-[50px] h-[50px] rounded-full'/>
                  <h2 className='font-text text-[18px]'>{user.userName}</h2>
                  </div>
                )
              })
            }
        </div>
       <span className='rounded-full  w-[40px] h-[40px] flex items-center justify-center hover:bg-gray-700 duration-200'>
        <button onClick={handleLogout} className='text-white text-[24px]'>
            <IoIosLogOut/>
          </button>
       </span>
      </div>

    </div>

     
      <div className='h-[auto] pt-36 justify-center px-20 flex'>
        <PanelContactData/>    
      </div>
    </div>
  )
}

export default ContactDashboard
