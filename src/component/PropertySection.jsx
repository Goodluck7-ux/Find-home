"use client";

import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import { motion } from "framer-motion";
import PropertyCards from "./PropertyCards";
import axios from "axios";

export default function PropertySection() {
    const [search, setSearch] = useState("");
    const [type, setType] = useState("All");
    const [maxPrice, setMaxPrice] = useState(1000);

    // 1. Initialize state to match the expected API object structure
    const [data, setData] = useState({ properties: [] });
    const [loading, setLoading] = useState(true);
    const token= localStorage.getItem("token");

    const fetchProperties = async () => {
        try {
            setLoading(true);
            const res = await axios.get("/api/properties", {
                headers:{
                    Authorization: `Bearer ${token}`
                }
            });

            // add token to authorization headers


            // Assuming res.data is { properties: [...] }
            console.log("fetched data", res.data)
            setData(res.data);
        } catch (error) {
            console.error("Error fetching properties:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProperties();
    }, []);

    // 2. Logic for filtering (Optional: can be applied to data.properties)
    // const filteredProperties = data.properties.filter((property) => {
    //     const matchesSearch = property.propertyTitle?.toLowerCase().includes(search.toLowerCase()) ||
    //         property.city?.toLowerCase().includes(search.toLowerCase());
    //     const matchesType = type === "duplex" || property.propertyType === type;
    //     const matchesPrice = property.price <= maxPrice;
    //     return matchesSearch && matchesType && matchesPrice;

        
    // });

    const filteredProperties = data?.properties
    return (
        <section className="bg-[#f7f2ec] min-h-screen p-6">
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

            <SearchBar
                search={search} setSearch={setSearch}
                type={type} setType={setType}
                maxPrice={maxPrice} setMaxPrice={setMaxPrice}
            />

            <div className="mt-8">
                {loading ? (
                    <p className="text-center text-black">Loading properties...</p>
                ) : filteredProperties.length === 0 ? (
                    <p className="text-center text-black mt-10">
                        No Listed properties
                    </p>
                ) : (
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-black"
                        initial="hidden"
                        animate="show"
                        variants={{
                            hidden: {},
                            show: { transition: { staggerChildren: 0.1 } },
                        }}
                    >
                        {filteredProperties.map((property) => (
                            <PropertyCards key={property._id} property={property} />
                        ))}
                    </motion.div>
                )}
            </div>
        </section>
    );
}