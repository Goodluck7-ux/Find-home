import Link from "next/link";
import { IoCartSharp } from "react-icons/io5";
import BodySection from "./BodySection";
import Footer from "./Footer";

export default function ShopSection() {
  
 

  return (
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
      <Link href="/All" className=" px-4  py-1.5 rounded-full text-sm border bg-black text-white">All</Link>
       <Link href="/Furniture" className=" px-4 py-1.5 bg-white rounded-full text-sm  border text-gray-600 hover:bg-pink-50">Furniture</Link>
       <Link href="/Decor" className=" px-4 py-1.5 bg-white rounded-full text-sm border text-gray-600 hover:bg-pink-50">Decor</Link>
       <Link href="/Lighting" className= " px-4 py-1.5 bg-white rounded-full text-sm border text-gray-600 hover:bg-pink-50">Lighting</Link>
       <Link href="/Textiles" className=" px-4 py-1.5 bg-white rounded-full text-sm border text-gray-600 hover:bg-pink-50">Textiles</Link>
      </div> 
     <BodySection/>
     
    <Footer/>
    </div>
  );
}