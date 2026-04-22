// import { properties } from "@/app/data/properties";
// import Image from "next/image";
// import { FiMapPin, FiMessageCircle } from "react-icons/fi";
// import { FaBed, FaBath } from "react-icons/fa";

// export default function PropertyDetails({ params }) {
//   const property = properties.find((p) => p.id === params.id);

//   if (!property) return <p>Not found</p>;

//   return (
//     <div className="bg-[#f7f2ec] min-h-screen px-6 py-6">
      
      {/* BACK LINK */}
      // <p className="text-sm text-gray-500 mb-4 cursor-pointer">
      //   ← All properties
      // </p>

      {/* GRID LAYOUT */}
      // <div className="grid lg:grid-cols-3 gap-8">
        
        {/* LEFT CONTENT */}
        // <div className="lg:col-span-2">
          
          {/* IMAGE */}
          // <Image
          //   src={property.image}
          //   alt={property.title}
          //   width={900}
          //   height={500}
          //   className="w-full h-[400px] object-cover rounded-2xl"
          // />

          {/* TITLE */}
          // <h1 className="text-3xl font-bold mt-6">
          //   {property.title}
          // </h1>

          {/* LOCATION */}
          // <div className="flex items-center gap-2 text-gray-500 mt-2">
          //   <FiMapPin />
          //   <span>{property.location}</span>
          // </div>

          {/* FEATURES */}
          // <div className="bg-white rounded-2xl shadow-sm border mt-6 p-4 flex gap-8">
            
          //   <div className="flex items-center gap-2">
          //     <FaBed className="text-orange-500" />
          //     <span>{property.beds} Beds</span>
          //   </div>

          //   <div className="flex items-center gap-2">
          //     <FaBath className="text-orange-500" />
          //     <span>{property.baths} Baths</span>
          //   </div>

          //   <div className="flex items-center gap-2">
          //     📐 <span>{property.size} m²</span>
          //   </div>
          // </div>

          {/* DESCRIPTION */}
          // <div className="mt-8">
          //   <h2 className="font-semibold text-lg">
          //     About this home
          //   </h2>
          //   <p className="text-gray-600 mt-2">
          //     A bright villa with garden, pool and panoramic views.
          //   </p>
          // </div>

          {/* EXTRA CONTENT TO ENABLE SCROLL */}
        //   <div className="mt-10 space-y-6">
        //     <p className="text-gray-600">
        //       Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        //       Vivamus lacinia odio vitae vestibulum vestibulum.
        //     </p>
        //     <p className="text-gray-600">
        //       Cras vehicula, mi eget laoreet pulvinar, justo nulla facilisis erat.
        //     </p>
        //     <p className="text-gray-600">
        //       Pellentesque habitant morbi tristique senectus et netus et malesuada.
        //     </p>
        //     <p className="text-gray-600">
        //       More content here to make the page scroll...
        //     </p>
        //   </div>
        // </div>

        {/* RIGHT SIDEBAR (STICKY MAGIC ✨) */}
        // <div className="relative">
        //   <div className="sticky top-6">
            
        //     <div className="bg-white rounded-2xl shadow-md p-6 border">
              
        //       <p className="text-sm text-gray-500">
        //         ASKING PRICE
        //       </p>

        //       <h2 className="text-2xl font-bold text-orange-500 mt-1">
        //         €{property.price.toLocaleString()}
        //       </h2>

              {/* AGENT */}
              // <div className="flex items-center gap-3 mt-6 bg-[#f3ede7] p-3 rounded-xl">
              //   <div className="w-10 h-10 bg-orange-500 text-white flex items-center justify-center rounded-full">
              //     MS
              //   </div>
              //   <div>
              //     <p className="font-medium">Maria Silva</p>
              //     <p className="text-sm text-gray-500">
              //       Listing agent
              //     </p>
              //   </div>
              // </div>

              {/* BUTTONS */}
//               <button className="w-full mt-6 bg-gradient-to-r from-orange-400 to-orange-500 text-white py-3 rounded-full">
//                 📅 Request a viewing
//               </button>

//               <button className="w-full mt-3 border py-3 rounded-full flex items-center justify-center gap-2">
//                 <FiMessageCircle />
//                 Message agent
//               </button>
//             </div>

//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }








// import { properties } from "@/app/data/properties";
// import Image from "next/image";

// export default function PropertyDetails({ params }) {
//     const property = properties.find((p) => p.id === params.id);

//     if (!property) return <p>Not found</p>;

//     return (
//         <div className="p-6 bg-[#f7f2ec] min-h-screen">
//             <Image
//                 src={property.image}
//                 width={800}
//                 height={400}
//                 alt={property.title}
//                 className="rounded-xl w-full h-[400px] object-cover"
//             />

//             <h1 className="text-3xl font-bold mt-4">
//                 {property.title}
//             </h1>

//             <p className="text-gray-500">{property.location}</p>

//             <p className="text-orange-500 text-xl font-semibold mt-2">
//                 €{property.price.toLocaleString()}
//             </p>

//             <div className="flex gap-6 mt-4">
//                 <span>{property.beds} beds</span>
//                 <span>{property.baths} baths</span>
//                 <span>{property.size} m²</span>
//             </div>
//         </div>
//     );
// }