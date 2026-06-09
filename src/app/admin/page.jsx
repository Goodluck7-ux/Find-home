"use client";
import React, { useEffect, useState } from 'react';
import { ShieldCheck, Home, Users, Box, Plus } from 'lucide-react';
import AdminsFirstComponent from '@/component/AdminsFirstComponent';
import { ListingRow, UserRow, ProductCard } from '@/component/AdminsSecondComponent';
import { toast } from 'react-toastify';
import axios from 'axios';


export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('Listings');
  const [properties, setProperties]=useState([]);

  const listings = [
    { id: 1, title: 'Riverside Cottage', author: 'New Agent', time: '2 hours ago' },
    { id: 2, title: 'Penthouse Suite', author: 'Maria Silva', time: '5 hours ago' },
  ];

  const flaggedUsers = [
    { id: 1, name: 'spammer_42', reports: 5, joined: '2026-05-10' },
    { id: 2, name: 'fake_user_99', reports: 2, joined: '2026-05-12' }
  ];

  const products = [
    { id: 1, title: 'Velvet Chair', price: 320, stock: 12, image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=200' },
    { id: 2, title: 'Oak Desk', price: 450, stock: 5, image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=200' }
  ];
// function to get pending  propertiees fromt the db

  const fetchProperties= async ()=>{
    try{
    

        const res=await axios.get('/api/properties',{
          headers:{
            Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
        console.log(res.data.properties)
        setProperties(res.data.properties)
      

    

    }
    catch(error){
      console.error("Error fetching properties", error)
      toast.error("failed to fetch Properties");
    }
  }

  useEffect(()=>{
    fetchProperties();
  }, []);
// api to handle property approval

  const handleApprove=async()=>{
    try{  
      const res=axios.patch(`/api/properties/approve/{property._id}`,{
        headers:{
          "Authorization":`Bearer ${localStorage.getItem("token")}`
        }
      })

      toast.success("property approved successfully");
    }
    catch(error){
      console.error("Error approving property", error)
      toast.error("failed to approve property");
    }
  }

  return (
    <div className="min-h-screen bg-[#FDF8F3] pb-20 pt-16 px-6 md:px-12">
      {/* Increased max-width to 7xl for a spacious, high-end feel */}
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section - Added more bottom margin */}
        <div className="mb-14 flex items-center gap-6">
          <div className="bg-[#FF7D52] p-5 rounded-[1.8rem] text-white shadow-lg shadow-orange-100/50">
            <ShieldCheck size={42} strokeWidth={2.5} />
          </div>
          <div>
            <h1 className="text-5xl font-black tracking-tight text-slate-900 mb-1">Admin dashboard</h1>
            <p className="text-gray-500 text-xl font-medium">Approve listings, manage users, upload products.</p>
          </div>
        </div>

        {/* Stats Row - AdminsFirstComponent */}
        <div className="flex flex-col lg:flex-row gap-8 mb-16">
          <AdminsFirstComponent title="Pending listings" count={2} icon={Home} iconBg="bg-orange-100/60" />
          <AdminsFirstComponent title="Flagged users" count={2} icon={Users} iconBg="bg-orange-100/60" />
          <AdminsFirstComponent title="Products" count={6} icon={Box} iconBg="bg-orange-100/60" />
        </div>

        {/* Main Content Area */}
        <div className="bg-white rounded-[3.5rem] p-10 md:p-14 shadow-sm border border-orange-50/50">
          
          {/* Tab Switcher - Correcting the background colors */}
           {['Listings', 'Users', 'Products'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-10 py-3 rounded-full font-bold text-lg transition-all ${
                  activeTab === tab 
                  ? 'bg-white text-slate-900 shadow-md' 
                  : 'text-gray-400 hover:text-gray-500'
                }`}
              >
                {tab}
              </button>
            ))}

          {/* List/Grid Content */}
          <div className="transition-all duration-300">
            {activeTab === 'Listings' && (
               <div className="divide-y divide-gray-50">
                 {properties.length > 0 && properties.map(item => <ListingRow key={item._id} {...item} onApprove={handleApprove} />)}
               </div>
            )}

            {activeTab === 'Users' && (
              <div className="divide-y divide-gray-50">
                {flaggedUsers.map(user => <UserRow key={user.id} {...user} />)}
              </div>
            )}

            {/* Product side left exactly as requested */}
            {activeTab === 'Products' && (
              <div>
                <button className="bg-[#FF7D52] text-white px-7 py-3 rounded-full font-bold flex items-center gap-2 mb-8 hover:bg-orange-600 shadow-md transition active:scale-95">
                  <Plus size={20} strokeWidth={3} /> Upload new product
                </button>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {products.map(product => <ProductCard key={product.id} {...product} />)}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}