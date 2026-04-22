import { CiSearch } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
export default function SearchBar({
    search,
    setSearch,
    type,
    setType,
    maxPrice,
    setMaxPrice,
}) {
    return (
        <div className="relative bg-white p-4 rounded-2xl text-black text-[13px] flex flex-col md:flex-row gap-3 items-center">
            <CiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-black font-black text-[17px] ml-2 " />
            <input
                type="text"
                placeholder="Search by location or title..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1 px-4 py-3 pl-8 text-black rounded-full border outline-none"
            />

            <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="px-4 py-3 rounded-full border"
            >
                <option>All</option>
                <option>Villa</option>
                <option>Apartment</option>
                <option>Studio</option>
                <option>House</option>
            </select>

            <div className="flex items-center gap-2 border rounded-full px-2 py-3">
                <span className="text-[13px]">
                    Max €{maxPrice.toLocaleString()}
                </span>
                <input
                    type="range"
                    min="0"
                    max="1000000"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    className="accent-orange-500"
                />
            </div>
        </div>
    );
}