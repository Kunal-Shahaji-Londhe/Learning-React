import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import {InputBox} from './components/index.js'
import bg from './assets/Back.png'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertedAmount,setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap = () =>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () =>{
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
  <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
  style={{backgroundImage: `url('https://images.pexels.com/photos/1037993/pexels-photo-1037993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`}}>

    <div className='w-full'>
      <div className='w-full max-w-lg mx-auto border-2 border-black rounded-lg pt-4 pb-36 p-12  bg-pink-50'>
      <form onSubmit={(e) => {
        e.preventDefault()
        convert()
      }}>
        <div className='w-full  mt-16  mb-1'>
        <h1 className='text-center text-2xl mb-12 font-bold border-2 border-black p-1 bg-white rounded-full'>Currency Converter</h1>
          <InputBox
            label='from'
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setFrom(currency)}
            onAmountChange={(amount) => setAmount(amount)}
            selectedCurrency={from}
          />
        </div>
        <div className='relative w-full h-0.5'>
          <button
          className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-rose-400 hover:bg-rose-500 border-2 border-black rounded-lg px-2 py-0.5'
          onClick={swap}
          >
         <img width="32" height="32" src="https://img.icons8.com/carbon-copy/100/sorting-arrows-horizontal.png" alt="sorting-arrows-horizontal"/>
          </button>
        </div>

        <div className='w-full mb-1'>
          <InputBox
            label='to'
            amount={convertedAmount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setTo(currency)}
            selectedCurrency={to}
            amountDisabled={true}
          />
        </div>

        <button
        className='w-full border-2 border-black rounded-lg bg-rose-400 hover:bg-rose-500 text-white px-4 py-3 rounded-lg'
        type='submit'
        >
          Convert {from.toUpperCase()} to {to.toUpperCase()}
        </button>

      </form>

      </div>
    </div>
  </div>
  )
}

export default App
