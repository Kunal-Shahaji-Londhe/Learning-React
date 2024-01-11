import React , {useContext}from 'react'
import UserContext from '../context/UserContext'


function Profile() {

    const {user} = useContext(UserContext)

    if(!user){
        return (
            <div className='ml-4 mt-4 rounded-sm text-center bg-rose-500 max-w-xs font-bold'>
                Please Login!
            </div>
          )
    }

    return (
        <div className='ml-4 mt-4 rounded-sm text-center bg-sky-500 max-w-xs font-bold'>
            Welcome, {user.username}
        </div>
      )

  
}

export default Profile