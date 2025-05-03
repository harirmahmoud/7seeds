import React from 'react'
import { Atom, Calendar, ChevronRight, FlaskRoundIcon as Flask, Microscope, Users } from "lucide-react"



export default function Events() {
  return (
    <div>
         <section id="events" className="w-full py-12 md:py-24 lg:py-32 bg-blue-50 flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">Events</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-800">Upcoming Activities</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join us for exciting scientific events, workshops, and conferences.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="text-blue-700">Annual Science Fair</CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" /> May 15, 2025
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Showcase your research projects and innovations at our annual science fair.</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 relative top-0 sm:top-0 md:top-6 lg:top-7"
                  >Show More</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-blue-700">Quantum Physics Workshop</CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" /> June 10, 2025
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Learn about the fascinating world of quantum mechanics from leading experts.</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 relative top-0 sm:top-0 md:top-6 lg:top-7 ">Show More</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-blue-700">Environmental Science Conference</CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" /> July 22, 2025
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Discuss climate solutions and environmental conservation strategies.</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Show More</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section */}
       
    </div>
  )
}
export function Card({ children, className }) {
  return <div className={`bg-white shadow-lg rounded p-4 ${className}`}>{children}</div>;
}

export function CardHeader({ children }) {
  return <div className="mb-2">{children}</div>;
}

export function CardTitle({ children, className }) {
  return <h3 className={`text-xl font-bold ${className}`}>{children}</h3>;
}

export function CardDescription({ children, className }) {
  return <p className={`text-sm text-gray-500 ${className}`}>{children}</p>;
}

export function CardContent({ children }) {
  return <div className="my-2">{children}</div>;
}

export function CardFooter({ children }) {
  return <div className="mt-4">{children}</div>;
}
export function Button({ children, className, ...props }) {
  return (
    <button
      className={`px-4 py-2 rounded text-white ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}