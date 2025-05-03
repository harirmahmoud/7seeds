import React from 'react'
import { NavbarMenu } from '../mockData/data'

import { MdMenu } from 'react-icons/md'
import ResponsiveMenu from './ResponsiveMenu'
import { useNavigate } from 'react-router'


export default function Navbar() {
    const [open, setOpen] = React.useState(false)
    const handleToggle = () => {
        setOpen(!open)
    }
    const handleClose = () => {
        setOpen(false)
    }
    const nav=useNavigate()
  return (
    <> 
    <nav className='bg-blue-200 shadow-neutral-500/20 sticky top-0 z-50 flex items-center justify-between'>
        <div className="container flex justify-between items-center mx-auto px-4 md:px-0  ">
            <div className="logo text-2xl flex items-center gap-2
            font-blod py-8 uppercase">
                
                <p className='text-3xl text-blue-600 font-bold'>7SEEDS</p>
                <span className='text-3xl text-neutral-600 font-bold'> Club</span>
           
            </div>
            <div className='hidden md:block'>
                <ul className='flex gap-6 items-center'>
                    {NavbarMenu.map((item) => (
                        <li key={item.id} className='text-neutral-600 hover:text-blue-600 cursor-pointer'>
                            <a href={item.link} className='flex items-center gap-2'>
                                <i className={item.icon}></i>
                                {item.title}
                            </a>
                        </li>
                    ))}
                    <li> <button onClick={()=>nav('/join')} className='transform transition  duration-300 bg-blue-600 rounded w-20 h-10 text-neutral-100 transition:transofrm hover:bg-blue-700'>Join US</button></li>
                </ul>
            </div>
           
        </div>
        <div className='md:hidden mx-6 ' onClick={()=>setOpen(!open)}>
            <MdMenu className='text-4xl '/>
        </div>
    </nav>
    <ResponsiveMenu open={open}/>
    </>
   
  )
}
