import React, {useState,useEffect} from 'react'
import axios from 'axios'
import {AiTwotoneDelete, AiOutlineQuestion} from 'react-icons/ai'

const ContactsData = () => {

    const [contacts, setContacts] = useState([])

    useEffect(() => {

        axios.get("http://localhost:3001/getContacts")
        .then(contacts => setContacts(contacts.data))
        .catch(err => console.log(err))

    },[])

  return (
    <table className='mb-10'>
        <thead className='bg-gray-950 text-neutral-300 h-[50px]'>
            <tr className='text-[18px] font-text'>
                <th className='border px-5'>Ad</th>
                <th className='border px-5'>Soyad</th>
                <th className='border px-5'>Email</th>
                <th className='border px-5'>Telefon No</th>
                <th className='border px-5'>Mesaj</th>
                <th className='border px-5'><AiOutlineQuestion className='text-[24px]'/></th>
            </tr>
        </thead>

        <tbody>
            {
                contacts.map(contact => {
                    return(
                    <tr className='bg-gray-800 text-neutral-300 h-[50px]' key={contact._id}>
                        <td className='border px-5'>{contact.firstName}</td>
                        <td className='border px-5'>{contact.lastName}</td>
                        <td className='border px-5'>{contact.email}</td>
                        <td className='border px-5'>{contact.phone}</td>
                        <td className='border px-5'>{contact.message}</td>
                        <td className='border px-5 hover:bg-gray-700 duration-200 cursor-pointer'><button className='text-[24px]'><AiTwotoneDelete/></button></td>
                    </tr> )
                })
            }
        </tbody>
    </table>
  )
}

export default ContactsData
