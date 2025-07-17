import React from 'react'
import {assets} from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import {useClerk , UserButton , useUser} from '@clerk/clerk-react'

const Navbar = () => {
    const navigate = useNavigate()

    const { user } = useUser()
    const { openSignIn } = useClerk()



  return (
    <div className='flex items-start justify-between py-4 px-6 sm:px-10 lg:px-20'>
        <img 
            onClick={() => navigate('/')} 
            src={assets.logo1 }
            alt="" 
            className='w-90 sm:w-88 cursor-pointer'
        />

        {
            user ?  <UserButton/> : (

                  <button onClick={openSignIn}
        
            className='bg-primary text-white flex items-center gap-2 px-4 py-2.5 sm:px-6 sm:py-3 text-sm cursor-pointer rounded-full hover:bg-primary/90 transition-colors'
        >
            Get Started
            <ArrowRight className='w-4 h-4' />
        </button>

            )
        }
        
        

    </div>
  )
}

export default Navbar