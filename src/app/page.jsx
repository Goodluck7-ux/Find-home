import FeaturedHomes from "@/component/FeaturedHome";
import Features from "@/component/Features";
import Hero from "@/component/Hero";
import Navbar from "@/component/Navbar";
import PropertySection from "@/component/PropertySection";
import Stats from "@/component/Stats";

import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Stats/>
      <Features/>
      <FeaturedHomes/>
      <PropertySection/>

    </div>



  );
}
