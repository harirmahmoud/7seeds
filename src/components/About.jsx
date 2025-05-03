import React from 'react'
import { Atom, Calendar, ChevronRight, FlaskRoundIcon as Flask, Microscope, Users } from "lucide-react"



export default function About() {
  return (
    <div>
       <section id="about" className="w-full py-12 md:py-24 lg:py-32 flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">About Us</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-800">Our Mission</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We are dedicated to fostering scientific curiosity, promoting research, and building a community of
                  passionate scientists and enthusiasts.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-blue-100 p-4">
                  <Microscope className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-700">Research</h3>
                <p className="text-center text-gray-600">
                  Conducting cutting-edge research across various scientific disciplines.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-blue-100 p-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-700">Community</h3>
                <p className="text-center text-gray-600">
                  Building a supportive network of scientists, students, and enthusiasts.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-blue-100 p-4">
                  <Flask className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-700">Innovation</h3>
                <p className="text-center text-gray-600">
                  Developing new technologies and solutions to address global challenges.
                </p>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}
