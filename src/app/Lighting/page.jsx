import Footer from '@/Component/Footer';
import Link from 'next/link';
import React from 'react'
import { IoCartSharp } from "react-icons/io5";

export default function page() {

  const items = [
     {
      title: "Lighting",
      image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&h=600&q=80",
      name: "Pendant Light",
      price: "$145",
      link: "/lighting",
    },
  ]
  return (

    <div>
       <div className="max-w-7xl mx-auto px-6 py-12">
      
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-semibold">Shop the home</h1>
          <p className="text-gray-500 text-sm">
            Curated furniture & decor.
          </p>
        </div>

        <button className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm flex gap-1">
         <span className="text-white"><IoCartSharp /></span> View cart
        </button>
      </div>

     <div className="flex gap-3 mb-8">
      <Link href="/All" className="px-4 py-1.5 bg-white rounded-full text-sm border text-gray-600 hover:bg-pink-50 ">All</Link>
       <Link href="/Furniture" className=" px-4 py-1.5 bg-white rounded-full text-sm  border text-gray-600 hover:bg-pink-50">Furniture</Link>
       <Link href="/Decor" className=" px-4 py-1.5 bg-white rounded-full text-sm border text-gray-600 hover:bg-pink-50">Decor</Link>
       <Link href="/Lighting" className= " px-4  py-1.5 rounded-full text-sm border bg-black text-white">Lighting</Link>
       <Link href="/Textiles" className=" px-4 py-1.5 bg-white rounded-full text-sm border text-gray-600 hover:bg-pink-50">Textiles</Link>
      </div> 
     
      <div>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((item) => (

            <div className="rounded-2xl overflow-hidden bg-gray-100">
              <div className="h-64 w-full hover:scale-105 transition-transform duration-300">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-4 text-sm text-gray-600">
                {item.title}
              </div>

              <div className="p-2 text-sm text-black font-semibold">
                {item.name}
              </div>

              <div className="p-2 text-sm text-red-600">
                {item.price}
              </div>
            </div>
          

        ))}
      </div>
    </div>
    
    </div>

      <Footer/>
    </div>
  )
}





