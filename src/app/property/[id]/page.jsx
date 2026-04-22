import { properties } from "@/data/properties";
import Image from "next/image";
import { FiMapPin, FiMessageCircle } from "react-icons/fi";
import { FaBed, FaBath } from "react-icons/fa";

export default async function PropertyDetails({ params }) {
  const { id } = await params; // ✅ IMPORTANT FIX

  const property = properties.find((p) => p.id === id);

  if (!property) {
    return (
      <div className="p-6">
        <p>Property not found</p>
      </div>
    );
  }

  return (
    <div className="bg-[#f7f2ec] min-h-screen px-6 py-6 mt-15">

      <p className="text-sm text-black mb-4">
        ← All properties
      </p>

      <div className="grid lg:grid-cols-3 gap-8">

        {/* LEFT */}
        <div className="lg:col-span-2 text-black">
          <Image
            src={property.image}
            alt={property.title}
            width={900}
            height={500}
            className="w-full h-[400px] object-cover rounded-2xl"
          />

          <h1 className="text-3xl font-bold mt-6">
            {property.title}
          </h1>

          <div className="flex items-center gap-2 text-gray-500 mt-2">
            <FiMapPin />
            <span>{property.location}</span>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border mt-6 p-4 flex gap-8">
            <div className="flex items-center gap-2">
              <FaBed className="text-orange-500" />
              <span>{property.beds} Beds</span>
            </div>

            <div className="flex items-center gap-2">
              <FaBath className="text-orange-500" />
              <span>{property.baths} Baths</span>
            </div>

            <div className="flex items-center gap-2">
              📐 <span>{property.size} m²</span>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="font-semibold text-lg text-gray-600">
              About this home
            </h2>
            <p className="text-gray-600 mt-2">
              A bright villa with garden, pool and panoramic views.
            </p>
          </div>

          {/* EXTRA SCROLL CONTENT */}
          <div className="mt-10 space-y-6">
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="text-gray-600">
              More content to enable scrolling...
            </p>
            <p className="text-gray-600">
              Keep scrolling to see sticky effect...
            </p>
          </div>
        </div>

        {/* RIGHT (STICKY SIDEBAR) */}
        <div className="relative">
          <div className="sticky top-6">
            <div className="bg-white rounded-2xl shadow-md p-6 border">

              <p className="text-sm text-gray-500">
                ASKING PRICE
              </p>

              <h2 className="text-2xl font-bold text-orange-500 mt-1">
                €{property.price.toLocaleString()}
              </h2>

              <div className="flex items-center gap-3 mt-6 bg-[#f3ede7] p-3 rounded-xl">
                <div className="w-10 h-10 bg-orange-500 text-white flex items-center justify-center rounded-full">
                  MS
                </div>
                <div>
                  <p className="font-medium text-black">Maria Silva</p>
                  <p className="text-sm text-gray-500">
                    Listing agent
                  </p>
                </div>
              </div>

              <button className="w-full mt-6 bg-gradient-to-r from-orange-400 to-orange-500 text-white py-3 rounded-full">
                📅 Request a viewing
              </button>

              <button className="w-full mt-3 text-black border py-3 rounded-full flex items-center justify-center gap-2">
                <FiMessageCircle />
                Message agent
              </button>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}










// app/property/[id]/page.jsx
// import { CiSquareQuestion } from "react-icons/ci";
// import { FiMessageCircle } from "react-icons/fi";

// export default function PropertyDetails({ params }) {
//   const { id } = params;

// Temporary static data (later comes from backend)
// const property = {
//   id,
//   image: "/photo1.avif",
//   price: "$450,000",
//   title: "Beachfront Studio",
//   location: "California, USA",
//   beds: 3,
//   baths: 2,
//   Area: "1200 sqft",
//   description:
//     "A beautiful modern home located in a serene environment with easy access to the city.",

//   agent: {
//     name: "Jessica Smith",
//     role: "Senior Property Agent",
//     image: "/photo7.avif",
//   },
// };

// return (
//   <div className="bg-[#f7f4ef] min-h-screen flex flex-col">

{/* HERO IMAGE */ }
// <div className="w-full h-[400px] overflow-hidden">
//   <img
//     src={property.image}
//     alt={property.title}
//     className="w-full h-full object-cover"
//   />
// </div>

{/* CONTENT */ }
// <div className="px-10 py-10 grid md:grid-cols-3 gap-10">

{/* LEFT SIDE */ }
// <div className="md:col-span-2">

{/* Title + Price */ }
// <h1 className="text-3xl font-bold mb-2">
//   {property.title}
// </h1>

// <p className="text-orange-500 text-xl font-semibold mb-2">
//   {property.price}
// </p>

// <p className="text-gray-600 mb-6">
//   {property.location}
// </p>

{/* Property Info */ }
// <div className="flex gap-6 mb-6 text-gray-700">
//   <span>{property.beds} Beds</span>
//   <span>{property.baths} Baths</span>
// </div>
// <div>

// </div>

{/* Description */ }
//   <div>
//     <h2 className="text-xl font-semibold mb-2">
//       About this home
//     </h2>
//     <p className="text-gray-600 leading-relaxed">
//       {property.description}
//     </p>
//   </div>
// </div>

{/* RIGHT SIDE (ACTION CARD) */ }
// <div className="bg-white p-6 rounded-2xl shadow-sm border-gary-200 h-fit ">

//   {/* Agent Info */}
// <div className="flex items-center gap-4 mb-6">
//   <img
//     src={property.agent.image}
//     alt={property.agent.name}
//     className="w-14 h-14 rounded-full object-cover"
//   />

//   <div>
//     <h4 className="font-semibold">
//       {property.agent.name}
//     </h4>
//     <p className="text-sm text-gray-500">
//       {property.agent.role}
//     </p>
//   </div>
// </div>

{/* Trust hint */ }
// <p className="text-sm text-gray-600 mb-6">
//   Usually responds within a few minutes
// </p>

{/* Buttons */ }
//     <button className="flex items-center justify-center gap-2 w-full bg-orange-500/80 text-white font-bold py-3 rounded-full mb-3 hover:bg-orange-600 transition">
//       <span className='font-bold text-lg '><FiMessageCircle /></span>
//       Contact Agent
//     </button>

//     <button className="flex items-center justify-center gap-2 w-full font-bold border border-gray-300 py-3 rounded-full hover:bg-gray-200 transition">
//       <span className='font-bold text-lg '><CiSquareQuestion /></span>
//       Request a viewing
//     </button>

//   </div>

// </div>

{/* <PropertyDetails /> */ }
//     </div>
//   );
// }