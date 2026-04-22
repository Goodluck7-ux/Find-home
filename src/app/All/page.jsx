import Footer from '@/Component/Footer';
import Link from 'next/link';
import React from 'react'

const items = [
    {
      title: "Furniture",
      image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=800&h=600&q=80",
      name: "Velvet Lounge Chair",
      price: "$320",
      link: "/furniture",
    },
    {
      title: "Decor",
      image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&h=600&q=80",
      name: "Ceramic Plant Pot Set",
      price: "$48",
      link: "/decor",
    },
    {
      title: "Lighting",
      image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&h=600&q=80",
      name: "Pendant Light",
      price: "$145",
      link: "/lighting",
    },
    {
      title: "Textiles",
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&h=600&q=80",
      name: "Linen Throw Blanket",
      price: "$79",
      link: "/textiles",
    },

     {
      title: "Furniture",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&h=600&q=80",
      name: "Oak Coffee Tabel",
      price: "$540",
      link: "/furniture",
    },

      {
      title: "Decor",
      image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&h=600&q=80",
      name: "Woven Wall Hanging",
      price: "$95",
      link: "/decor",
    },
  ];

  

export default function BodySection() {
  return (
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
      <Footer/>
    </div>
  )
}
