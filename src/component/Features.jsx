// components/Features.jsx
import FeatureCard from "./FeatureCard";
import { Home, ShoppingBag, MessageCircle } from "lucide-react";

export default function Features() {

  const features = [
    {
      title: "Properties",
      description: "Search by location, price, and type. Book viewings in one tap.",
      icon: <Home className="text-white" />,
      color: "#f97316",
    },
    {
      title: "Shop",
      description: "Furniture, decor, and lighting curated for the home you found.",
      icon: <ShoppingBag className="text-white" />,
      color: "#fb923c",
    },
    {
      title: "Messages",
      description: "Real-time chat with agents, sellers, and your contacts.",
      icon: <MessageCircle className="text-white" />,
      color: "#06b6d4",
    },
  ];

  return (
    <section className="px-10 py-16 bg-[#f7f4ef]">
      
      {/* Heading */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold">
          Three things, one home
        </h2>
        <p className="text-gray-600 mt-2">
          Everything you need to move in and feel at home.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {features.map((item, index) => (
          <FeatureCard key={index} {...item} />
        ))}
      </div>

    </section>
  );
}