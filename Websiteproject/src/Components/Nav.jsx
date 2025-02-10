import React from 'react'

function Nav() {
  return (
   
   <nav className='flex items-center justify-around bg-gray-400  text-white p-6'>
    <input className='p-1 rounded text-black' type="text" placeholder='Search'  />
    <ul className='flex gap-6 underline font-bold cursor-pointer '>
        <li><a id='info' href="/info">Info</a></li>
        <li><a id='cources' href="/Cources">Cources</a></li>
        <li><a id='offer' href="/offer">Offer</a></li>
        <li><a id='contact' href="/contact">Contact</a></li>
    </ul>
   </nav>
   
  )
}

export default Nav