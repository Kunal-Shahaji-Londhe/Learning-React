import { useState , useCallback, useEffect, useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length,setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const passwordRef = useRef(null)
  
  const generatePassword = useCallback(() =>{
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if(numberAllowed) str += '0123456789'
    if(charAllowed) str += '!@#$%^&*-_+=[]{}~`'

    for (let i =1;i < length; i++){
      const char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)

      setPassword(pass)
    }

  }, [length, numberAllowed, charAllowed])


  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current.select()
  }

  useEffect( () => {
    generatePassword()
  }, [length, numberAllowed, charAllowed])
  
  return (
    <div className='bg-gray-200 bg-opacity-80 h-screen w-screen top-0 left-0 fixed '>
    <h1 className='text-center mt-40 text-4xl font-bold dark:text-black'>Generate Your Password Below!👇</h1>
    <div className='w-full max-w-md mt-20 mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-pink-100 text-black-500'>
      <h1 className='text-black text-center my-3'>Password Generator🔑</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input
          type='text'
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
          ref={passwordRef}
        />
        <button
        className='outline-none bg-blue-200 text-black px-3 py-0.5 shrink-0'
        onClick={copyPasswordToClipboard}
        >
        copy
        </button>
      </div>
      <div 
      className='flex text-sm gap-x-2'>

      <div
      className='flex items-center gap-x-1'>
        <input
          type='range'
          min={6}
          max={100}
          value={length} 
          className='cursor-pointer'
          onChange={(e) => setLength(e.target.value)}
          name='' 
          id=''
        />
        <label
          htmlFor='length'
          >
            Length: {length}
          </label>
      </div>
      <div
      className='flex items-center gap-x-1'>
        <input
          type='checkbox'
          defaultChecked={numberAllowed}
          onChange={() => {
          setNumberAllowed((prev) => !prev)
          }}
          name='' 
          id=''
        />
        <label
          htmlFor='number'
          >
            Numbers
          </label>
      </div>

      <div
      className='flex items-center gap-x-1'>
        <input
          type='checkbox'
          defaultChecked={charAllowed}
          onChange={() => {
          setCharAllowed((prev) => !prev)
          }}
          name='' 
          id=''
        />
        <label
          htmlFor='charInput'
          >
            Character
          </label>
      </div>

      </div>
    </div>
    </div>
  )
}

export default App
