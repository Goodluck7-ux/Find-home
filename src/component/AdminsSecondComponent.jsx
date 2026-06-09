import { formatDate } from '@/lib/dateFormater';
import { Check, X, Ban } from 'lucide-react';

// Sub-component for Listings
export const ListingRow = ({ propertyTitle, propertyImages, createdAt, listedBy, city, country, handleApprove }) => (
  <div className="flex items-center justify-between py-6 border-b border-gray-50 last:border-0 hover:bg-gray-50/50 px-4 transition-colors">
    <div>
      <h3 className="text-xl font-bold text-slate-800">{propertyTitle}</h3>
      <span className="text-gray-400 font-medium">{city}, {country}</span>
      <p className="text-gray-400 font-medium">By {listedBy.firstName} • {formatDate(createdAt)}</p>
    </div>
    <div className="flex gap-3">
      <button onClick={handleApprove} className="flex items-center gap-2 bg-[#2ECC71] text-white px-6 py-2.5 rounded-xl font-bold hover:bg-emerald-600 transition shadow-sm active:scale-95">
        <Check size={20} strokeWidth={2.5} /> Approve
      </button>
      <button className="flex items-center gap-2 bg-[#FF2D2D] text-white px-6 py-2.5 rounded-xl font-bold hover:bg-red-600 transition shadow-sm active:scale-95">
        <X size={20} strokeWidth={2.5} /> Reject
      </button>
    </div>
  </div>
);

// Sub-component for Users
export const UserRow = ({ name, reports, joined }) => (
  <div className="flex items-center justify-between py-6 border-b border-gray-50 last:border-0 hover:bg-gray-50/50 px-4 transition-colors">
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-slate-700 font-bold text-lg border border-orange-100">
        {name.charAt(0).toUpperCase()}
      </div>
      <div>
        <h3 className="text-xl font-bold text-slate-800">{name}</h3>
        <p className="text-gray-400 font-medium">{reports} reports • joined {joined}</p>
      </div>
    </div>
    <button className="flex items-center gap-2 bg-[#FF2D2D] text-white px-6 py-2.5 rounded-xl font-bold hover:bg-red-600 transition shadow-sm">
      <Ban size={18} strokeWidth={2.5} /> Ban user
    </button>
  </div>
);

// Sub-component for Products
export const ProductCard = ({ title, price, stock, image }) => (
  <div className="bg-white p-4 rounded-[2rem] border border-gray-100 shadow-sm flex items-center gap-4 hover:border-orange-200 transition-all">
    <div className="w-20 h-20 bg-gray-100 rounded-2xl overflow-hidden flex-shrink-0">
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>
    <div>
      <h3 className="text-lg font-bold text-slate-800">{title}</h3>
      <p className="text-gray-400 font-medium">€{price} • stock {stock}</p>
    </div>
  </div>
);