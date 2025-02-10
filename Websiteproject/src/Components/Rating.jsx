import React from 'react'

function Rating() {

    const rating = [
        {
            text: 'Total Visits',
            num: "100.3M"
        },
        {
            text: 'Bounce Rate ',
            num:" 40.4%"
        },

        {
            text: 'Pages per Visit',
            num: 5.77
        },

        {
            text: 'Avg Visit Duration ',
            num: "41:55:854"
        }

    ]
    return (
        <>
        <div className='flex items-center justify-center text-4xl p-6 text-gray-500'>
            <h1>RATING FOR THE MARKET PLACE</h1>
        </div>
            <div className='flex items-center justify-evenly'>
                {
                    rating.map((rat,i) => {
                        return (

                            <div key={i} className='border-l-4 gap-1 p-2 flex flex-col items-center text-center justify-center h-32  bg-gre-200'>
                                <p className='font-bold text-2xl'>{rat.text}</p>
                                <p className='text-xl'>{rat.num}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Rating