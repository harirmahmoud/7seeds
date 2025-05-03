import React from 'react'
import logo from './unknown.jpg'

export default function Team() {
  return (
    <div>
         <section id="team" className="w-full py-12 md:py-24 lg:py-32 flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">Our Team</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-800">Meet Our Scientists</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our team consists of passionate researchers and educators dedicated to scientific advancement.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "unknown",
                  role: "President",
                  bio: "Specializes in molecular biology with 15 years of research experience.",
                  image: "/placeholder.svg?height=200&width=200",
                },
                {
                  name: "unknown",
                  role: "Research Director",
                  bio: "Quantum physicist with numerous publications in leading scientific journals.",
                  image: "/placeholder.svg?height=200&width=200",
                },
                {
                  name: "unknown",
                  role: "Education Coordinator",
                  bio: "Passionate about science education and public outreach programs.",
                  image: "/placeholder.svg?height=200&width=200",
                },
                {
                  name: "unknown",
                  role: "Technology Lead",
                  bio: "Expert in computational science and artificial intelligence applications.",
                  image: "/placeholder.svg?height=200&width=200",
                },
                {
                  name: "unknown",
                  role: "Events Manager",
                  bio: "Organizes scientific conferences and workshops with international reach.",
                  image: "/placeholder.svg?height=200&width=200",
                },
                {
                  name: "unknown",
                  role: "Treasurer",
                  bio: "Manages club finances and secures funding for research projects.",
                  image: "/placeholder.svg?height=200&width=200",
                },
              ].map((member, index) => (
                <div key={index} className="flex flex-col items-center space-y-4">
                  <img
                    src={logo}
                    alt={member.name}
                    className="rounded-full object-cover w-32 h-32"
                    width={128}
                    height={128}
                  />
                  <div className="space-y-2 text-center">
                    <h3 className="text-xl font-bold text-blue-700">{member.name}</h3>
                    <p className="text-sm text-blue-600 font-medium">{member.role}</p>
                    <p className="text-sm text-gray-600">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
    </div>
  )
}
