import React from 'react';

const OrderCard = ({ order }) => {
  // Determine color and progress based on status
  const statusStyles = {
    Delivered: { bg: 'bg-green-100', text: 'text-green-700', dot: 'bg-green-500', steps: 3 },
    Shipped: { bg: 'bg-cyan-100', text: 'text-cyan-700', dot: 'bg-cyan-500', steps: 2 },
    Processing: { bg: 'bg-orange-100', text: 'text-orange-700', dot: 'bg-orange-500', steps: 1 },
  };

  const currentStatus = statusStyles[order.status] || statusStyles.Processing;

  return (
    <div className="bg-white rounded-[32px] p-8 mb-6 shadow-sm border border-gray-50">
      <div className="flex justify-between items-start mb-6">
        <div>
          <p className="text-gray-400 text-sm mb-1 font-medium">{order.date}</p>
          <h3 className="text-xl font-bold text-slate-900">{order.id}</h3>
          <p className="text-gray-500 text-sm">{order.items} item • {order.price}</p>
        </div>

        {/* Status Badge */}
        <div className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm ${currentStatus.bg} ${currentStatus.text}`}>
          <div className={`w-2 h-2 rounded-full ${currentStatus.dot}`}></div>
          {order.status}
        </div>
      </div>

      {/* Progress Tracker */}
      <div className="mt-8">
        <div className="flex gap-3 h-2.5">
          {[1, 2, 3].map((step) => (
            <div 
              key={step}
              className={`flex-1 rounded-full transition-colors duration-500 ${
                step <= currentStatus.steps ? 'bg-[#FF8A5C]' : 'bg-gray-100'
              }`}
            ></div>
          ))}
        </div>
        <div className="flex justify-between mt-3 text-[13px] font-medium text-gray-400">
          <span className={currentStatus.steps >= 1 ? 'text-gray-600' : ''}>Processing</span>
          <span className={currentStatus.steps >= 2 ? 'text-gray-600' : ''}>Shipped</span>
          <span className={currentStatus.steps >= 3 ? 'text-gray-600' : ''}>Delivered</span>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;