import React from 'react';
import OrderCard from '@/component/OrderCard'; // Adjust path if needed

const ordersData = [
  { id: "ORD-1042", date: "2025-04-12", items: 1, price: "€540", status: "Delivered" },
  { id: "ORD-1051", date: "2025-04-15", items: 2, price: "€127", status: "Shipped" },
  { id: "ORD-1063", date: "2025-04-17", items: 1, price: "€320", status: "Processing" },
];

export default function OrdersPage() {
  return (
    <div className="min-h-screen bg-[#FFF9F2] pt-12 pb-20 px-4">
      <div className="max-w-5xl mx-auto">
        <header className="mb-12 ml-2">
          <h1 className="text-[42px] font-bold text-slate-900 leading-tight">Your orders</h1>
          <p className="text-gray-500 text-lg mt-2">Track shipments and order history.</p>
        </header>

        <div className="space-y-4">
          {ordersData.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))}
        </div>
      </div>
    </div>
  );
}