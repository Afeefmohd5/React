import React from 'react'
import img1 from '../images/tiger.jpg';
import img2 from '../images/bellon.webp';

function Card({username}) {
  
  
  return (
    <><h1 className='text-6xl font-semibold p-2 bg-sky-400 hover:text-7xl shadow-blue-600'>hello MOHAMMED AFEEF KHALEED</h1>
    <div className='flex items-center justify-center gap-4 m-2'>
      <div className='h-96 w-56 border shadow-2xl hover:w-60'>
        <img src={img1} alt="" />
        <h1>{username}:</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ipsa possimus accusantium iusto, doloribus eligendi obcaecati eum. </p>
        <button>visit us</button>
      </div>
      <div className='h-96 w-56 border shadow-2xl hover:w-60'>
        <img src={img2} alt="" />
        <h1>{username}:</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ipsa possimus accusantium iusto, doloribus eligendi obcaecati eum. </p>
        <button>visit us</button>
      </div>
    </div>
    </>
  )
}

export default Card