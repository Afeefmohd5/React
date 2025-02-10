import React from 'react'
import img1 from '../images/img1.png'
import account from '../images/account.png'
import cart from '../images/cart.png'
import heart from '../images/heart.png'
import person from '../images/person.png'
function Nav() {
  return (
    <>  
      
    <marquee behavior="" direction="left">Use Code NEW10 and get 10% OFF* on non-discounted Watches over Rs. 2499. Maximum Discount: Rs. 1200. T&C Apply*.</marquee>
    <div className='border-double shadow-2xl p-4  '>
    <nav className='flex  items-center justify-between'>
        <img className='h-14' src={img1} alt="" />
        <input type="text" htmlFor="search" placeholder='Search' className='w-90 p-2 border'/>
        <div className='flex gap-5  justify-between'>
           <a> <img className='h-6' src={account} alt="" />Account</a>
           <a> <img className='h-6'  src={heart} alt=''/>Wishlist</a>
           <a> <img className='h-6'  src={cart} alt=''/> <p>Cart</p></a>
           <a> <img className='h-6'  src={person} alt=''/><p>TrackOrder</p></a> 
            
           
            
            </div>
    </nav>
    </div>
    </>

  )
}

export default Nav