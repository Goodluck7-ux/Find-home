"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function PropertyCards({ property }) {
    const [liked, setLiked] = useState(false);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("favorites")) || [];
        setLiked(saved.includes(property.id));
    }, [property.id]);

    const toggleLike = (e) => {
        e.preventDefault();

        let saved = JSON.parse(localStorage.getItem("favorites")) || [];

        if (saved.includes(property.id)) {
            saved = saved.filter((id) => id !== property.id);
            setLiked(false);
        } else {
            saved.push(property.id);
            setLiked(true);
        }

        localStorage.setItem("favorites", JSON.stringify(saved));
    };

    return (
        <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition"
        >
            <Link href={`/property/${property.id}`}>
                <div className="relative">
                    <Image
                        src={property.image}
                        alt={property.title}
                        width={400}
                        height={250}
                        className="w-full h-[200px] object-cover"
                    />

                    <span className="absolute top-3 left-3 bg-white px-3 py-1 text-sm rounded-full shadow">
                        {property.type}
                    </span>

                    <button
                        onClick={toggleLike}
                        className="absolute top-3 right-3 bg-white text-red-400 p-2 rounded-full shadow"
                    >
                        {liked ? "❤️" : "🤍"}
                    </button>
                </div>

                <div className="p-4">
                    <div className="flex justify-between">
                        <h3 className="font-semibold">{property.title}</h3>
                        <p className="text-orange-500 font-semibold">
                            €{property.price.toLocaleString()}
                        </p>
                    </div>

                    <p className="text-gray-500 text-sm">{property.location}</p>

                    <div className="flex gap-4 text-sm mt-2 text-gray-600">
                        <span>{property.beds} beds</span>
                        <span>{property.baths} baths</span>
                        <span>{property.size} m²</span>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}