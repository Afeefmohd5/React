import React from 'react'
import './header.css'
import headermanimg from '../images/headermenimg.jpg'
function Headerpage() {
    return (
        <>
            
                <div className="bg-cover bgImage w-full h-screen bg-center blur- bg-no-repeat bg-[url(headerImage)] ">

                    <div className="absolute text-white flex items-center justify-center m-auto  h-full text-center gap-6">
                        <div className='flex flex-col gap-4'>
                        <h1 className='text-4xl'>MARKETING PLACE</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque totam rem nesciunt, cupiditate adipisci, maiores maxime quasi dignissimos, eaque itaque perferendis aspernatur praesentium? Fuga, doloremque, saepe deleniti aut eligendi atque corrupti quam sed fugiat doloribus asperiores libero quos necessitatibus magnam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptates, similique provident itaque eius corporis nobis ipsum officia. Rerum ut hic inventore ad quaerat atque, quasi tempora quae odio dignissimos.</p>
                        <h2 className='text-3xl'> We Are Creative Agency</h2> 
                        <button className='p-2 border rounded bg-slate-600  w-52 flex items-center justify-center m-auto text-white cursor-pointer'>Click Me To Learn More</button>

                        </div>
                        <img className='w-1/2' src={headermanimg} alt="" />
                    </div>
                </div>




            
        </>
    )
}

export default Headerpage