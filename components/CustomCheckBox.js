import React from 'react'

const CustomCheckBox = ({ type, selected, setInvestType }) => {
    return (
        <div
            className={`w-full py-5 px-3 cursor-pointer rounded-lg text-base font-medium flex justify-between items-center outline ${selected ? "outline-2 outline-purple bg-blue" : "outline-1 outline-gray bg-white"}`}
            onClick={() => setInvestType(type)}
        >
            {type === 'short' ? "Short Term" : "Long Term"}
            <img className={`w-6 ${!selected && "hidden"}`} src="/images/blue-tick.svg" alt="" />
        </div>
    )
}

export default CustomCheckBox