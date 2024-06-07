"use client"
import React, { useEffect, useState } from 'react'

export default function User() {

  const userData = [
    {
      username: 'Badmosh',
      id: 15,
      email: 'example@gmail.com'
    },
    {
      username: 'JohnDoe',
      id: 27,
      email: 'johndoe@example.com'
    },
    {
      username: 'AliceSmith',
      id: 42,
      email: 'alice.smith@example.com'
    },
    {
      username: 'Anurag',
      id: 22,
      email: 'alice.smith@example.com'
    }
  ];

  const [user, setUser] = useState([])

  useEffect(() => {

    const applyUser = () => {
      setUser(userData)
    } //function

    applyUser() // function call

  }, [])

  
  const filteredUsers = user.filter(response => response.id == 42)
 
  
  return (
    <>
    {filteredUsers.map((response, index) => (
      <div key={index} className='bg-gray-200'>
        <div className='text-2xl text-[#ff0000]'>Username:{response.username}</div>
        <div>ID:{response.id}</div>
        <div>Email:{response.email}</div>
      </div>
    ))}
    </>
  )
}
