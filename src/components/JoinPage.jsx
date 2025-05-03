"use client";

import React, { useState } from "react";


import { useNavigate } from "react-router";
import { Atom, ArrowLeft, CheckCircle2 } from "lucide-react";

export default function JoinPage() {
  const router = useNavigate();
  const [formStep, setFormStep] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStep(1);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-40 w-full border-b bg-white">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <a href="/" className="flex gap-2 items-center text-xl font-bold text-blue-600">
          <div className="logo text-2xl flex items-center gap-2
            font-blod py-8 uppercase mx-6">
                
                <p className='text-3xl text-blue-600 font-bold'>7SEEDS</p>
                <span className='text-3xl text-neutral-600 font-bold'> Club</span>
           
            </div>
          </a>
          <div className="flex flex-1 items-center justify-end">
            <a href="/" className="text-blue-600 hover:text-blue-700 flex items-center gap-1">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1 container py-12">
        <div className="max-w-3xl mx-auto">
          {formStep === 0 ? (
            <form onSubmit={handleSubmit} className="space-y-6 border rounded-lg p-6 shadow">
              <h2 className="text-2xl font-bold text-blue-800">Join 7SEEDS</h2>
              <p className="text-neutral-600">Complete the form below to become a member of our scientific community.</p>
              <h3 className="text-blue-700 font-semibold text-xl">Personal Information</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
                <div>
                  <label className="text-blue-600">First Name <span className="text-red-600">*</span></label>
                  <input required className="w-full border p-2 rounded" placeholder="Enter your first name" />
                </div>
                <div>
                  <label className="text-blue-600">Last Name <span className="text-red-600">*</span></label>
                  <input required className="w-full border p-2 rounded" placeholder="Enter your last name" />
                </div>
                <div>
                  <label className="text-blue-600">Email <span className="text-red-600">*</span></label>
                  <input required type="email" className="w-full border p-2 rounded" placeholder="Enter your email" />
                </div>
                <div>
                  <label className="text-blue-600">Phone Number <span className="text-red-600">*</span></label>
                  <input type="tel" className="w-full border p-2 rounded" placeholder="Enter your phone number" />
                </div>
               
              </div>

              <div>
                <label className="text-blue-600">Academic Background <span className="text-red-600">*</span></label>
                <select required className="w-full border p-2 rounded">
                  <option value="">Select your highest degree</option>
                  <option value="high-school">High School</option>
                  <option value="bachelors">Bachelor's</option>
                  <option value="masters">Master's</option>
                  <option value="phd">Ph.D.</option>
                  <option value="post-doc">Post-Doctoral</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="text-blue-600">Areas of Interest <span className="text-red-600">*</span></label>
                <select required className="w-full border p-2 rounded">
                  <option value="">Select your interest</option>
                  <option value="physics">Physics</option>
                  <option value="chemistry">Chemistry</option>
                  <option value="biology">Biology</option>
                  <option value="astronomy">Astronomy</option>
                  <option value="earth-science">Earth Science</option>
                  <option value="computer-science">Computer Science</option>
                  <option value="mathematics">Mathematics</option>
                  <option value="engineering">Engineering</option>
                  <option value="medicine">Medicine</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="text-blue-600">Research Experience <span className="text-red-600">*</span></label>
                <textarea className="w-full border p-2 rounded min-h-[100px]" placeholder="Describe your research experience"></textarea>
              </div>

           

              <div>
                <label className="text-blue-600">How did you hear about us? <span className="text-red-600">*</span></label>
                <select className="w-full border p-2 rounded">
                  <option value="">Select an option</option>
                  <option value="social-media">Social Media</option>
                  <option value="friend">Friend or Colleague</option>
                  <option value="event">Scientific Event</option>
                  <option value="search">Search Engine</option>
                  <option value="other">Other</option>
                </select>
              </div>

             

              <div className="flex justify-between">
                <button type="button" className="border px-4 py-2 rounded" onClick={() => router("/")}>Cancel</button>
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Submit</button>
              </div>
            </form>
          ) : (
            <div className="text-center border p-6 rounded shadow">
              <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-green-100 mb-4">
                <CheckCircle2 className="h-10 w-10 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-blue-800">Application Submitted!</h2>
              <p>Thank you for applying to join SciClub. A confirmation email will be sent shortly.</p>
              <p>If you have any questions, contact us at <a href="mailto:membership@sciclub.org" className="text-blue-600 underline">membership@sciclub.org</a></p>
              <button onClick={() => router("/")} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Return to Home</button>
            </div>
          )}
        </div>
      </main>

      <footer className="w-full border-t bg-white py-6 mt-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex gap-2 items-center text-xl font-bold text-blue-600 px-7">
                    
                    <span>7SEEDS</span>
                    <span className='text-neutral-600'>CLUB</span>
                  </div>
          <p className="text-sm text-gray-600">© 2025 Scientific Club. All rights reserved.</p>
      
        </div>
      </footer>
    </div>
  );
}
 