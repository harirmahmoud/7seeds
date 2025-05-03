import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Events from './Events'
import Team from './Team'
import Contarct from './Contarct'
import { Atom, Calendar, ChevronRight, FlaskRoundIcon as Flask, Microscope, Users } from "lucide-react"

export default function Main() {
  return (
    <div>
         <Navbar />
           <Hero />
           <About/>
           <Events/>
           <Team/>
           <Contarct/>
           <footer className="w-full border-t bg-background py-6">
                <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
                  <div className="flex gap-2 items-center text-xl font-bold text-blue-600 px-7">
                    
                    <span>7SEEDS</span>
                    <span className='text-neutral-600'>CLUB</span>
                  </div>
                  <p className="text-center text-sm text-gray-600">© 2025 7SEEDS Club. All rights reserved.</p>
                  
                </div>
              </footer>
    </div>
  )
}
