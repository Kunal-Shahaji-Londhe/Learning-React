import React, {useContext, useState} from 'react'
import UserContext from '../context/UserContext'
function Login() {

    const [username,setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) =>{
        e.preventDefault()
        setUser({username,password})
    }
  return (
    <div className='max-w-sm p-4 border border-black rounded-md'>
        <h2 className='text-center text-xl font-bold mb-2'>Login</h2>
        <input 

        className='mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
        focus:border-blue-500 block w-full p-2.5
        dark:bg-gray-700 dark:border-gray-600
        dark:placeholder-gray-400 dark:text-white 
        dark:focus:ring-blue-500 dark:focus:border-blue-500'


            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='username'
        />
        <input 

        
        className='mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
        focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 
        dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
        dark:focus:border-blue-500'


            type='text'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='password'
        />
        <button
        onClick={handleSubmit}

        className='ml-32 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none
        bg-white rounded-full border border-gray-200
        hover:bg-gray-100 hover:text-blue-700 focus:z-10
        focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700
        dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600
        dark:hover:text-white dark:hover:bg-gray-700'
        >
        Submit
        </button>
    </div>
  )
}

export default Login