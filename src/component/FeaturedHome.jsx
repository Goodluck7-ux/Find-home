// components/FeaturedHomes.jsx


import { properties } from "@/data/property";
import PropertyCard from "./PropertyCard";

export default function FeaturedHomes() {
    return (
        <section className="px-10 py-16 bg-[#f7f4ef]">

            <div className="mb-10 flex justify-between items-center">
                <div>
                    <h2 className="text-3xl font-bold">Featured homes</h2>
                <p className="text-gray-600 mt-2">
                    Hand-picked listings ready to view.
                </p>
                </div>
                <a
                    href="#"
                    className="text-orange-500 font-medium hover:underline"
                >
                    View all →
                </a>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {properties.map((home) => (
                    <PropertyCard key={home.id} {...home} />
                ))}
            </div>
        </section>
    );
}