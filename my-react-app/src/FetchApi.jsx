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
    // console.log(userData);
  }
  useEffect(() => {
    fetchData()

  }, [])
  return (
    <div className='container flex items-center flex-wrap justify-center gap-3 bg-[rgb(29, 26, 49)]'>

    {
      data.map((user) => {
        return (

          <div className="flex flex-col border w-[95%] sm:w-72 p-2 shadow-sm shadow-orange-500">
            <img className='w-full' src={user.image} alt="" />
            <p className='py-1 text-center font-bold text-2xl text-white'>
              {user.firstName}
            </p>
            <p className='py-1 text-white'>
              Gender:{user.gender}
            </p>
            <p className='py-1 text-white'>
              Age:{user.age}
            </p>
            <p className='py-1 text-white'>
              E-mail:{user.email}
            </p>

          </div>
        )
      })
    }
  </div>
  )
}

export default FetchApi