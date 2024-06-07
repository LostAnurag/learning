"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function User() {

  // const userData = [
  //   {
  //     username: 'Badmosh',
  //     id: 15,
  //     email: 'example@gmail.com'
  //   },
  //   {
  //     username: 'JohnDoe',
  //     id: 27,
  //     email: 'johndoe@example.com'
  //   },
  //   {
  //     username: 'AliceSmith',
  //     id: 42,
  //     email: 'alice.smith@example.com'
  //   },
  //   {
  //     username: 'Anurag',
  //     id: 22,
  //     email: 'alice.smith@example.com'
  //   }
  // ];

  // get - fetch / data read
  // patch - data / update
  // delete / delete
  // post / post new data in api

  const [user, setUser] = useState([])

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        setUser(response.data); // Assuming the response data contains user data
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUser();
  }, []); // Empty dependency array means this effect runs only once, on component mount

  console.log(user)



  return (
    <>
      {user.map((response, index) => (
        <div key={index} className='bg-gray-200'>
          <div className='text-2xl text-[#ff0000]'>Username: {response.userId}</div>
          <div>ID: {response.id}</div>
          <div>Title: {response.title}</div>
        </div>
      ))}
    </>
  )
}
