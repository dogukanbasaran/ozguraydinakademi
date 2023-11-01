import React, { useEffect, useState } from 'react'
import axios from "axios"

const ContactInfo = () => {

    const [contacts, setContacts] = useState([])

    useEffect(() => {

        axios.get("http://localhost:3001/getContacts")
        .then(contacts => setContacts(contacts.data))
        .catch(err => console.log(err))

    },[])

  return (
    <div className='h-[500px] pt-36 flex justify-center'>

        <table className='mb-10'>
            <thead className='bg-gray-300'>
                <tr className='text-[18px] font-text'>
                    <th className='border px-5'>Ad</th>
                    <th className='border px-5'>Soyad</th>
                    <th className='border px-5'>Email</th>
                    <th className='border px-5'>Telefon No</th>
                    <th className='border px-5'>Mesaj</th>
                </tr>
            </thead>

            <tbody>
                 {
                    contacts.map(contact => {
                        return(<tr className='bg-gray-300' key={contact._id}>
                            <td className='border px-5'>{contact.firstName}</td>
                            <td className='border px-5'>{contact.lastName}</td>
                            <td className='border px-5'>{contact.email}</td>
                            <td className='border px-5'>{contact.phone}</td>
                            <td className='border px-5'>{contact.message}</td>

                        </tr> )
                    })
                 }
            </tbody>
        </table>
      
    </div>
  )
}

export default ContactInfo
