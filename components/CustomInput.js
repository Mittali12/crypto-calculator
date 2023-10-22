import React from 'react'

function Input({ heading, placeholder, value, onChangeValue, disabled }) {
    return (
        <div className='sm:col-span-6 col-span-12 flex flex-col items-start'>
            <p className='mb-1 text-[15px] font-normal text-black'>{heading}</p>
            <div className='relative h-fit flex items-center w-full'>
                <input
                    className='py-[17px] h-auto px-4 rounded-lg leading-normal bg-lightBlue sm:text-lg text-base  font-medium text-black focus:outline-1 pl-8 focus:outline focus:outline-blue focus:bg-white w-full focus:visited:none '
                    placeholder={placeholder}
                    type='number'
                    value={value}
                    onChange={(e) => onChangeValue(e.target.value)}
                    min={0}
                    disabled={disabled}
                />
                <span className='absolute left-4 leading-normal sm:text-lg text-base  font-medium text-black'>$</span>
            </div>
        </div >
    )
}

export default Input