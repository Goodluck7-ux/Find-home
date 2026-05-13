import { text } from 'framer-motion/client'
import Link from 'next/link'
import React from 'react'

export default function Sidebar(props) {
    const
        menuItems = [
            {
                id: 1,
                text: 'uplaod Property',
                url: "/upload-property",
                role: ['seller', 'admin'],
            },

            {
                id: 2,
                text: 'My Properties',
                url: "/my-properties",
                role: ['seller', 'admin'],
            },

            {
                id: 3,
                text: "view Agents",
                url: '/view-agents',
                role: [ "admin"]
            },

            {
                id: 4,
                text: 'view-appointments',
                url: '/view-appointments',
                role: ['seller'],
            },
            {
                id: 5,
                text: 'view-properties',
                url: '/view-properties',
                role: ['buyer'],
            }
        ]

    return (
        <div className='w-64 h-screen bg-black'>
            <div>
                <ul className='flex flex-col items-start p-4 h-full w-full'> 
                    {menuItems.map((item) => (
                        <Link href={item.url} key={item.id} className='text-white text-lg font-medium mb-4 cursor-pointer'>
                            {item.text}
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    )
}
