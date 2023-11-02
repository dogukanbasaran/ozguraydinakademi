import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router';

const Login = () => {

    const navigate = useNavigate();

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const submit = async (e) => {
        e.preventDefault();

            await axios.post("http://localhost:3001/login",{
                userName, password
            })
            .then(result => {
                console.log(result)
                if(result.data === "Success"){
                    navigate("/contactpanel/dashboard")
                }
            })
            .catch(err => console.log(err))

    }

  return (
    <div className='flex justify-center'>

        <form action='POST' className='flex flex-col p-10 gap-2 h-[auto] mb-20 bg-gray-800 text-neutral-300 font-text rounded-md'>
            <div className='flex flex-col gap-1'>
                <span>Kullanıcı Adı</span>
                <input className='border rounded-md px-2 text-neutral-800' type='text' onChange={(e) => {setUserName(e.target.value)}} />
            </div>
            <div className='flex flex-col gap-1'>
                <span>Parola</span>
                <input className='border rounded-md px-2 text-neutral-800' type='password' onChange={(e) => {setPassword(e.target.value)}} />
            </div>

            <button className='bg-gray-300 text-neutral-800 font-semibold rounded-md mt-4 py-1' type='submit' onClick={submit}>Giriş Yap</button>

        </form>     
    </div>
  )
}

export default Login
