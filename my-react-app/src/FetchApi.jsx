import React,{ useEffect, useState } from 'react'

function FetchApi() {
    const [data, setData] = useState([])
  const fetchData = async () => {
    const responce = await fetch('https://dummyjson.com/users')
    const result = await responce.json()
    // console.log(result);
    const userData = result.users;

    setData(userData)
    // console.log(userData)
  }
  useEffect(() => {
    fetchData()

  }, [])
  return (
    <div className='container bg-slate-950 p-5  flex items-center flex-wrap justify-center gap-6 bg-[rgb(29, 26, 49)]'>

    {
      data.map((user) => {
        console.log(user);
        return (

          <div className="flex flex-col rounded-3xl border w-[95%] sm:w-72 p-2 shadow-md shadow-blue-400 ">
            <img className='w-full hover:h-60 cursor-pointer' src={user.image} alt="" />
            <p className='py-1 text-center font-bold text-2xl text-white'>
              {user.firstName}
            </p>
            <p className='py-1 text-white text-center font-mono font-semibold'>
              height:{user.height}
            </p>
            <p className='py-1 text-white text-center font-mono font-semibold'>
              Age:{user.age}
            </p>
            <p className='py-1 text-white text-center font-mono font-semibold'>
              E-mail:{user.email}
            </p>
            <p className='py-1 text-white text-center font-mono font-semibold'>
              City:{user.address.city}
            </p>
            <p className='py-1 text-white text-center font-mono font-semibold'>
              Hairs:{user.hair.type}
            </p>

          </div>
        )
      })
    }
  </div>
  )
}

export default FetchApi