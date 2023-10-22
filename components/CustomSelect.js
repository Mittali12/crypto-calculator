import React, { useState, useEffect } from 'react';

const CustomSelect = ({ padding, options, link, selectedOption, setSelectedOption, setTaxRate }) => {
    const [optionBox, setOptionBox] = useState(false);
    const [selectedIcon, setSelectedIcon] = useState(options[0].icon);

    useEffect(() => {
        const timer = setTimeout(() => {
            setOptionBox(false)
        }, 2000);

        return () => {
            clearTimeout(timer)
        }
    }, [optionBox])


    const toggleOptionBox = () => {
        setOptionBox(!optionBox);
    }

    const handleOptionSelect = (selected, index, icon) => {
        if (setTaxRate) {
            setTaxRate(index)
        }
        setSelectedOption(selected);
        setSelectedIcon(icon);
        setOptionBox(false);
    }

    return (

        <div className='relative w-full'>
            <div className={`px-3  ${padding} rounded-lg leading-normal bg-lightBlue sm:text-lg text-base font-medium text-black focus:outline-1 focus:outline focus:outline-blue focus:bg-white w-full focus:visited:none cursor-pointer relative flex justify-between`} onClick={toggleOptionBox}>
                <div className='flex gap-2'>
                    {selectedIcon && <img src={selectedIcon} alt="Selected Icon" />}
                    <p>{selectedOption}</p>
                </div>
                <img src="/images/chevronDownArrow.svg" alt="Dropdown Arrow" />
            </div>
            {optionBox && (
                <div
                    className={`scrollBar absolute w-full mt-1 cursor-pointer bg-zinc-50 z-[999] p-1 rounded-lg flex flex-col gap-2 max-h-40 ${options.length > 2 && 'overflow-y-scroll'} shadow-xl`}
                    onMouseLeave={() => {
                        setOptionBox(false)
                    }}
                    onTouchEnd={() => {
                        setOptionBox(false);
                    }}
                >
                    {link ? (options.map((option, index) => (
                        <div className='py-3 px-3 bg-lightBlue rounded-lg text-black sm:text-lg text-base font-medium flex justify-start gap-4' key={index} onClick={() => handleOptionSelect(option.text, index, option.icon)}>
                            <img src={option.icon} alt={option.text + " Icon"} />
                            <p>{option.text}</p>
                        </div>
                    ))) :
                        (options.map((option, index) => (
                            <div className='py-3 px-3 bg-lightBlue rounded-lg text-black sm:text-lg text-base font-medium flex justify-start gap-4' key={index} onClick={() => handleOptionSelect(option.text, index)}>
                                <p>{option.text}</p>
                            </div>
                        ))
                        )}
                </div>
            )}
        </div>
    );
}

export default CustomSelect;
