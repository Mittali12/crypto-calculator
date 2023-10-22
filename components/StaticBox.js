import React from 'react';

const StaticBox = ({ backgroundColor, textColor, text, price }) => {

    const formattedPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    return (
        <div className={`w-full p-2 text-center rounded-lg h-24 flex flex-col justify-center ${backgroundColor}`}>
            <p className='text-base text-black font-medium'>{text}</p>
            <p className={`${textColor} mt-1 font-bold text-2xl`}>{formattedPrice}</p>
        </div>
    );
};

export default StaticBox;
