"use client";

import { useEffect, useState } from "react";
import { properties } from "../data/properties";
import SearchBar from "./SearchBar";
import { motion } from "framer-motion";
import PropertyCards from "./PropertyCards";

export default function PropertySection() {
    const [search, setSearch] = useState("");
    const [type, setType] = useState("All");
    const [maxPrice, setMaxPrice] = useState(1000000);

    const fetchProperties = async () => {   
        const res=await axios.get("/api/properties")
        console.log("Fetched properties:", res.data);
        
    }

    useEffect(() => {
        fetchProperties();
    }, 
    [])

    const filteredProperties = properties.filter((property) => {
        const matchesSearch =
            property.title.toLowerCase().includes(search.toLowerCase()) ||
            property.location.toLowerCase().includes(search.toLowerCase());

        const matchesType =
            type === "All" || property.type === type;

        const matchesPrice = property.price <= maxPrice;

        return matchesSearch && matchesType && matchesPrice;
    });

    return (
        <section className="bg-[#f7f2ec] min-h-screen p-6">

            {/* HEADER */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
                <div>
                    <h1 className="text-3xl text-black font-black">Find your home</h1>
                    <p className="text-gray-500">
                        {filteredProperties.length} properties available
                    </p>
                </div>

                <button className="bg-gradient-to-r from-orange-400 to-orange-500 text-white px-6 py-2 rounded-full shadow-md hover:scale-105 transition">
                    + List a property
                </button>
            </div>

            {/* SEARCH */}
            <SearchBar 
                search={search}
                setSearch={setSearch}
                type={type}
                setType={setType}
                maxPrice={maxPrice}
                setMaxPrice={setMaxPrice}
            />

            {/* GRID */}
            <div className="mt-8">
                {filteredProperties.length === 0 ? (
                    <p className="text-center text-black mt-30">
                        No properties match your filters...
                    </p>
                ) : (
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-black"
                        initial="hidden"
                        animate="show"
                        variants={{
                            hidden: {},
                            show: {
                                transition: {
                                    staggerChildren: 0.1,
                                },
                            },
                        }}
                    >
                        {filteredProperties.map((property) => (
                            <PropertyCards key={property.id} property={property} />
                        ))}
                    </motion.div>
                )}
            </div>
        </section>
    );
}