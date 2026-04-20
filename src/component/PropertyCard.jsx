
import Link from "next/link";

export default function PropertyCard({ id, image, price, title, location, beds, baths }) {
    return (
        <Link href={`/property/${id}`}>
            <div className="
        group
        bg-white 
        rounded-2xl 
        overflow-hidden 
        shadow-[0_8px_20px_rgba(0,0,0,0.04)]
        transition-all duration-300
        hover:-translate-y-2
        hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]
        cursor-pointer
      ">

                <div className="overflow-hidden">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                </div>

                <div className="p-5">
                    <div className="flex gap-8 items-center mb-2">
                        <p className="font-bold text-gray-800">{title}</p>
                        <h3 className="text-l text-red-500 font-bold mb-1">{price}</h3>
                    </div>

                    <p className="text-gray-500 text-sm mb-3">{location}</p>
                    <div className="flex gap-4 text-sm text-gray-600">
                        <span>{beds} Beds</span>
                        <span>{baths} Baths</span>
                    </div>
                </div>

            </div>
        </Link>
    );
}
