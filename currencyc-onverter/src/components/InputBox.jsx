import React, {useId} from 'react'

function InputBox ({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectedCurrency = 'usd',
    amountDisabled = false,
    currencyDisable = false,
    className=''
}) {

    const amountInputId = useId()

  return (
    <div className={`bg-pink-100 p-3 rounded-lg border-2 border-black text-sm flex 
    ${className}`}>

        <div className='w-1-2'>
            <label htmlFor={amountInputId} className='text-black/40 mb-2 inline-block'>
                {label}
            </label>

            <input 
            id={amountInputId}
            type='number'
            className='outline-none w-full bg-transparent py-1.5'
            placeholder='Amount'
            disabled={amountDisabled}
            value={amount}
            onChange={(e) => onAmountChange && onAmountChange
            (Number(e.target.value))}


            />
        </div>

        <div className='w-1/2 flex flex-wrap justify-end text-right'>
                <p className='text-black/40 mb-2 w-full'>Currency Type</p>
                <select
                className='rounded-lg border-2 border-black px-1 py-1 bg-white-100 cursor-pointer outline-none'
                value={selectedCurrency}
                onChange={(e) => {
                    onCurrencyChange && onCurrencyChange(e.target.value)
                }}
                disabled={currencyDisable}
                >
                {currencyOptions.map((currency) => (
                    <option key={currency} value={currency}>
                        {currency}
                    </option>
                ))}
                </select>
        </div>
    </div>
  )
}

export default InputBox