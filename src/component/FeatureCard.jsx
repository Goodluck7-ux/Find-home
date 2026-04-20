// components/FeatureCard.jsx
export default function FeatureCard({ icon, title, description, color }) {
    return (
        <div className="group
      bg-white 
      rounded-3xl 
      p-6 
      shadow-[0_8px_20px_rgba(0,0,0,0.04)]
      transition-all duration-300 ease-out
      hover:-translate-y-2 
      hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]
      cursor-pointer
    ">

            {/* Icon */}
            <div
                className="w-12 h-12 flex items-center justify-center rounded-full mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: color }}
            >
                {icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-2">
                {title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm mb-4">
                {description}
            </p>

            {/* Link */}
            <a
                href="#"
                className="text-orange-500 font-medium hover:underline"
            >
                Explore →
            </a>
        </div>
    );
}