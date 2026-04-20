import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { CiShoppingBasket } from "react-icons/ci";

export default function Hero() {
    return (
        <section className="px-10 py-16 bg-[#f7f4ef]">
            <div className="grid md:grid-cols-2 gap-10 items-center">

                {/* LEFT TEXT */}
                <div>
                    <span className="bg-orange-200 text-black font-semibold px-4 py-2 rounded-full text-[12px]">
                        Your home, your shop, your people
                    </span>

                    <h1 className="text-5xl font-bold mt-6 leading-tight">
                        Find a home you'll <br />
                        <span className="text-orange-500">love living in.</span>
                    </h1>

                    <p className="text-gray-600 mt-4">
                        Browse properties, furnish them from our shop, and message
                        agents and friends — all in one cheerful place.
                    </p>

                    {/* Buttons */}
                    <div className="flex gap-4 mt-6">
                        <button className="flex items-center gap-2 font-bold text-sm bg-orange-500/80 text-white px-6 py-3 rounded-full">
                             <span className='font-bold text-lg'>< IoIosSearch /></span>
                            Browse properties
                        </button>
                        <button className=" px-6 py-3 rounded-full flex items-center gap-2 font-bold text-sm bg-white hover:bg-orange-100">
                            <span className='font-bold text-lg '><CiShoppingBasket /></span>
                            Visit shop
                        </button>
                    </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="bg-white p-6 rounded-2xl shadow-md">
                    <img
                        src="/photo5.avif"
                        alt="house"
                        className="w-full"
                    />
                </div>

            </div>
        </section>
    )
}
