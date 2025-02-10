import React, { useState } from 'react'

function Nav() {
    const [open, setOpen] = useState(false)

    function checkOpen() {
        setOpen(!open)
    }

    return (
        <>
            <nav className='flex justify-between p-1 md:px-5 flex-col md:flex-row'>

                <div className='flex items-center justify-between md:px-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
                    </svg>





                    <div className='cursor-pointer flex flex-col' onClick={checkOpen}>

                        {
                            open ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>

                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" md:hidden w-10 h-10">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                                </svg>
                            )
                        }
                    </div>





                </div>
                <div className={`${open ? "flex" : "hidden"
                    } md:flex mx-auto md:mx-0 flex-col md:flex-row bg-slate-300 md:bg-transparent w-full md:w-fit mt-5 md:mt-0 md:items-center gap-3`}>
                    <a className='py-1 border px-3 hover:bg-slate-400 duration-500' href="">Home</a>
                    <a className='py-1 border px-3 hover:bg-slate-400 duration-500' href="">About</a>
                    <a className='py-1 border px-3 hover:bg-slate-400 duration-500' href="">Contact</a>
                </div>

            </nav>
        </>
    )
}

export default Nav