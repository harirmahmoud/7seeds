import React,{useCallback} from 'react'
import logo from './logo.jpg'
import { useNavigate } from 'react-router';


export default function Hero() {
    const nav=useNavigate()
  
      return (
       <div className="overflow-hidden" id="home">
        <div className="bg-gradient-to-b from-blue-300 to-white px-9 py-30 h-full">
          <div className="container flex flex-col lg:flex-row justify-between h-full lg:gap-20 mx-auto">
           <div>
            <h1 className='text-blue-700 text-6xl font-bold my-9'>Discover the Wonders of Science</h1>
            <p className='text-neutral-600 mb-6'>Join our scientific community to explore, learn, and innovate together. We bring curious minds together to advance scientific knowledge.</p>
            <button onClick={(()=>nav('/join'))} className='border-2 border-blue-700 rounded-md p-2 text-blue-700 font-semibold hover:bg-blue-700 hover:text-white transform transition  duration-300 '>Become a Member</button>
            </div>  <img className='m-auto my-10 rounded-xl shadow-lg' src={logo} alt="logo" />
          </div>
       </div>
       </div>
       
      );
}
