// app/property/[id]/page.jsx
import { CiSquareQuestion } from "react-icons/ci";
import { FiMessageCircle } from "react-icons/fi";

export default function PropertyDetails({ params }) {
  const { id } = params;

  // Temporary static data (later comes from backend)
  const property = {
    id,
    image: "/photo1.avif",
    price: "$450,000",
    title: "Beachfront Studio",
    location: "California, USA",
    beds: 3,
    baths: 2,
    Area: "1200 sqft",
    description:
      "A beautiful modern home located in a serene environment with easy access to the city.",

    agent: {
      name: "Jessica Smith",
      role: "Senior Property Agent",
      image: "/photo7.avif",
    },
  };

  return (
    <div className="bg-[#f7f4ef] min-h-screen flex flex-col">

      {/* HERO IMAGE */}
      <div className="w-full h-[400px] overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="px-10 py-10 grid md:grid-cols-3 gap-10">

        {/* LEFT SIDE */}
        <div className="md:col-span-2">

          {/* Title + Price */}
          <h1 className="text-3xl font-bold mb-2">
            {property.title}
          </h1>

          <p className="text-orange-500 text-xl font-semibold mb-2">
            {property.price}
          </p>

          <p className="text-gray-600 mb-6">
            {property.location}
          </p>

          {/* Property Info */}
          <div className="flex gap-6 mb-6 text-gray-700">
            <span>{property.beds} Beds</span>
            <span>{property.baths} Baths</span>
          </div>
          <div>
            
          </div>

          {/* Description */}
          <div>
            <h2 className="text-xl font-semibold mb-2">
             About this home
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {property.description}
            </p>
          </div>
        </div>

        {/* RIGHT SIDE (ACTION CARD) */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border-gary-200 h-fit ">

          {/* Agent Info */}
          <div className="flex items-center gap-4 mb-6">
            <img
              src={property.agent.image}
              alt={property.agent.name}
              className="w-14 h-14 rounded-full object-cover"
            />

            <div>
              <h4 className="font-semibold">
                {property.agent.name}
              </h4>
              <p className="text-sm text-gray-500">
                {property.agent.role}
              </p>
            </div>
          </div>

          {/* Trust hint */}
          <p className="text-sm text-gray-600 mb-6">
            Usually responds within a few minutes
          </p>

          {/* Buttons */}
          <button className="flex items-center justify-center gap-2 w-full bg-orange-500/80 text-white font-bold py-3 rounded-full mb-3 hover:bg-orange-600 transition">
              <span className='font-bold text-lg '><FiMessageCircle /></span>
            Contact Agent
          </button>

          <button className="flex items-center justify-center gap-2 w-full font-bold border border-gray-300 py-3 rounded-full hover:bg-gray-200 transition">
              <span className='font-bold text-lg '><CiSquareQuestion /></span>
            Request a viewing
          </button>

        </div>

      </div>
    </div>
  );
}