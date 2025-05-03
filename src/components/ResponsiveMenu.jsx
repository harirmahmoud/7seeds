import React from 'react'
import {motion,AnimatePresence} from 'framer-motion'
import { useNavigate } from 'react-router'

export default function ResponsiveMenu({open}) {
    const nav=useNavigate()
  return (
    <AnimatePresence>
{
    open &&(
        <motion.div
        initial={{opacity:0,top:'-100%'}}
        animate={{opacity:1,top:'10%'}}
        exit={{opacity:0,top:'-100%'}}
        transition={{duration:1}}
        className='absolute top-20 left-0 w-full h-screen
        z-20 '>
            <div className='text-xl font-semibold uppercase rounded-xl shadow-lg
            bg-blue-600/80 text-white py-10 my-20 mx-6'>
                <ul className='flex flex-col justify-center items-center gap-10'>
                    <li className='cursor-pointer hover:text-blue-700 transform transition  duration-300'>Home</li>
                    <li className='cursor-pointer hover:text-blue-700 transform transition  duration-300'>About</li>
                    <li className='cursor-pointer hover:text-blue-700 transform transition  duration-300'>Events</li>
                    <li className='cursor-pointer hover:text-blue-700 transform transition  duration-300'>Team</li>
                    <li className='cursor-pointer hover:text-blue-700 transform transition  duration-300'>Contact</li>
                    <li> <button onClick={(()=>nav('/join'))} className='transform transition  duration-300 bg-neutral-100 rounded w-30 h-10 text-blue-600  transition:transofrm hover:bg-blue-700 hover:text-neutral-100'>Join US</button></li>
                </ul>
            </div>
        </motion.div>
    )
}
    
    </AnimatePresence>
  )
}
