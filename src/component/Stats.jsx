import React from 'react'

export default function Stats() {
  return (
    <div className="flex gap-16 px-10 py-8 bg-[#f7f4ef]">
      <div>
        <h2 className="text-2xl font-bold">10k+</h2>
        <p className="text-gray-500">Listings</p>
      </div>
      <div>
        <h2 className="text-2xl font-bold">5k+</h2>
        <p className="text-gray-500">Happy buyers</p>
      </div>
      <div>
        <h2 className="text-2xl font-bold">24/7</h2>
        <p className="text-gray-500">Live chat</p>
      </div>
    </div>
  )
}
