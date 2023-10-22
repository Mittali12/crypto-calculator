import React from 'react'

const StaticBox = ({ backgroundColor, textColor, text, price }) => {
    return (
        <div className={`w-full p-2 text-center rounded-lg ${backgroundColor}`}>
            <p className='text-base text-black font-medium'>{text}</p>
            <p className={`${textColor} mt-1 font-bold`}>{price}</p>
        </div>
    )
}

export default StaticBox