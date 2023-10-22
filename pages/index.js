import Image from 'next/image'
import CustomInput from '@/components/CustomInput'
import StaticBox from '@/components/StaticBox'
import CustomCheckBox from '@/components/CustomCheckBox'
import CustomSelect from '@/components/CustomSelect'
import { useState, useEffect } from 'react'

const financialOption = [
  { text: 'FY 2023-24' }
]
const countryOption = [
  { text: 'Australia', icon: '/images/AustraliaIcon.svg' }
]
const AnnualIncomeOptions = [
  { text: '$0 - $18,200' },
  { text: '$18,201 - $45,000' },
  { text: '$45,001 - $120,000' },
  { text: '$120,001 - $180,000' },
  { text: '$18,000+' }
]
const TaxRateConfig = [
  '0%',
  '$Nil + 19% of excess over $18,200',
  '$5,092 + 32.5% of excess over $45,001',
  '$29,467 + 37% of excess over $120,000',
  '$51,667 + 45% of excess over $180,000',
]

export default function Home() {
  const [financialYear, setFinancialYear] = useState(financialOption[0].text)
  const [country, setCountry] = useState(countryOption[0].text)
  const [annualIncome, setAnnualIncome] = useState(AnnualIncomeOptions[0].text)
  const [taxRate, setTaxRate] = useState(0)
  const [taxPrice, setTaxPrice] = useState(0)
  const [purchasePrice, setPurchasePrice] = useState()
  const [salePrice, setSalePrice] = useState()
  const [expenses, setExpenses] = useState()
  const [investType, setInvestType] = useState('short')
  const [capitalGain, setCapitalGain] = useState(0)
  const [longTermDiscount, setLongTermDiscount] = useState(0)

  useEffect(() => {
    let gain = salePrice - purchasePrice - expenses
    if (isNaN(gain)) {
      gain = 0
    }
    setCapitalGain(gain)
    if (gain > 0) {
      setLongTermDiscount(50 / 100 * gain)
    } else {
      setLongTermDiscount(0)
    }

    if (gain < 0) {
      setTaxPrice(0)
      return
    }
    if (investType === 'long') {
      gain = gain - (gain * 50 / 100)
    }
    switch (taxRate) {
      case 0:
        setTaxPrice(0)
        break;
      case 1:
        setTaxPrice(gain * 19 / 100)
        break;
      case 2:
        setTaxPrice(gain * 32.5 / 100)
        break;
      case 3:
        setTaxPrice(gain * 37 / 100)
        break;
      case 4:
        setTaxPrice(gain * 45 / 100)
        break;
    }
  }, [salePrice, purchasePrice, expenses, investType, taxRate])


  return (
    <div className='bg-[#DEDFE2] w-full h-full p-4 sm:p-14 flex justify-center items-center ' >
      <div className='bg-white rounded-xl p-[17px] sm:px-20 sm:py-10 shadow-md text-center'>
        <h1 className='md:text-4xl text-2xl font-bold text-black'>
          Free Crypto Tax Calculator Australia
        </h1>
        <div className='sm:mt-10 mt-5 grid grid-cols-12 sm:gap-10 gap-5'>
          <div className='col-span-6 gap-1 sm:gap-2 flex flex-col md:flex-row justify-evenly '>
            <span className='font-normal sm:text-base text-sm text-black sm:py-2 text-left whitespace-nowrap'>Financial Year</span>
            <CustomSelect
              options={financialOption}
              padding="py-3"
              selectedOption={financialYear}
              setSelectedOption={setFinancialYear}
            />
          </div>
          <div className='col-span-6 gap-1 sm:gap-2 flex flex-col md:flex-row justify-evenly'>
            <span className='font-normal sm:text-base text-sm text-black sm:py-2 text-left'>Country</span>
            <CustomSelect
              options={countryOption}
              padding="py-3"
              link
              selectedOption={country}
              setSelectedOption={setCountry}
            />
          </div>
        </div>
        <hr className='sm:mt-7 mt-5' />
        <div className='grid grid-cols-12  sm:gap-10 gap-5 sm:mt-7 mt-5'>
          <CustomInput
            heading="Enter purchase price of Crypto"
            placeholder="30,000"
            value={purchasePrice}
            onChangeValue={setPurchasePrice}
          />
          <CustomInput
            heading="Enter sale price of Crypto"
            placeholder="20,000"
            value={salePrice}
            onChangeValue={setSalePrice}
          />
        </div>
        <div className='sm:mt-7 mt-5 grid grid-cols-12 sm:gap-10 gap-5'>
          <CustomInput
            heading="Enter your Expenses"
            placeholder="30,000"
            value={expenses}
            onChangeValue={setExpenses}
          />
          <div className='sm:col-span-6 col-span-12 flex flex-col items-start'>
            <p className='mb-1 text-sm font-normal text-black'>Investment Type</p>
            <div className='flex gap-2 w-full '>
              <div className='flex-1 justify-start '>
                <CustomCheckBox type="short" selected={investType === 'short'} setInvestType={setInvestType} />
                <p className='text-left text-black sm:text-[15px] text-xs'> &lt; 12 months</p>
              </div>
              <div className='flex-1 justify-start '>
                <CustomCheckBox type="long" selected={investType === 'long'} setInvestType={setInvestType} />
                <p className='text-left text-black sm:text-[15px] text-xs '> &gt; 12 months</p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col sm:items-end sm:grid sm:grid-cols-12  gap-2 sm:gap-10 md:gap-5 sm:mt-7 mt-5 w-full'>
          <div className='sm:col-span-6 col-span-12 flex flex-col items-start w-[96%]'>
            <p className='mb-1 font-normal text-sm text-black  text-left'>Select Your Annual Income</p>
            <CustomSelect
              options={AnnualIncomeOptions}
              padding="py-4"
              selectedOption={annualIncome}
              setSelectedOption={setAnnualIncome}
              setTaxRate={setTaxRate}
            />
          </div>
          <div className='sm:col-span-6 col-span-12 flex sm:flex-col sm:text-sm gap-1 sm:gap-3 sm:py-2 text-xs leading-6 font-normal text-gray justify-start items-start sm:justify-center sm:mx-2'>
            <p className=''>Tax Rate</p>
            <p className='whitespace-nowrap text-[10px] sm:text-xs'>{TaxRateConfig[taxRate]}</p>
          </div>
        </div>
        {
          investType !== 'short' &&
          <div className='grid grid-cols-12 sm:gap-10 gap-5 sm:mt-7 mt-5'>
            <CustomInput
              heading="Capital gains amount"
              placeholder="30,000"
              // value={capitalGain}
              value={capitalGain}
              onChangeValue={setCapitalGain}
              disabled={true}
            />
            <CustomInput
              heading="Discount for long term gains"
              placeholder="20,000"
              value={longTermDiscount}
              onChangeValue={setLongTermDiscount}
              disabled={true}
            />
          </div>
        }
        <div className='grid grid-cols-12 sm:gap-10 gap-5 sm:mt-7 mt-5'>
          <div className='sm:col-span-6 col-span-12'>
            <StaticBox
              backgroundColor={'bg-lightGreen'}
              textColor={"text-green"}
              text="Net Capital gains tax amount"
              price={`$ ${investType === 'short' ? capitalGain : (capitalGain - longTermDiscount)}`}
            />
          </div>
          <div className='sm:col-span-6 col-span-12'>
            <StaticBox
              backgroundColor={'bg-lightPurple'}
              textColor={"text-purple"}
              text="The tax you need to pay*"
              price={`$ ${taxPrice}`}
            />
          </div>
        </div>
      </div>
    </div >
  )
}
