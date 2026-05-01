import Link from 'next/link';
import React from 'react'
import { CiUser } from "react-icons/ci";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-4 bg-white w-full shadow-md fixed top-0 left-0 z-50">
      
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="bg-orange-500 font-bold text-white rounded-full w-8 h-8 flex items-center justify-center">
          N
        </div>
        <span className="font-semibold text-lg">Nestly</span>
      </div>

      {/* Links */}
      <div className="hidden md:flex gap-8 text-gray-500 font-bold text-sm cursor-pointer ">
        <Link href="/properties" className='hover:bg-gray-100 p-2 rounded-full' >Properties</Link>
        <Link href="/shop" className='hover:bg-gray-100 p-2 rounded-full'>Shop</Link>
        <Link href="/messages" className='hover:bg-gray-100 p-2 rounded-full'>Messages</Link>
        <Link href="/orders" className='hover:bg-gray-100 p-2 rounded-full'>Orders</Link>
        <Link href="https://my.account.sony.com/" className='hover:bg-gray-100 p-2 rounded-full'>Admin</Link>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        <button className="text-black text-xl bg-gray-200 hover:bg-yellow-300 p-2 rounded-full">
          <CiUser />
        </button>
        <Link href="/sign-up" className="bg-orange-500/70 text-white font-bold text-sm px-4 py-2 rounded-full">
          Sign up
        </Link>
      </div>
    </nav>
  )
}
