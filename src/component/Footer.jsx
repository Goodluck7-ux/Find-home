import React from 'react'
export default function Footer() {
  return (
    <>
      <div className='w-full h-50 bg-orange-100 pt-5'>

      <div className='w-25 flex justify-between items-center mx-4'>
      <div className='bg-orange-500 rounded-full w-10 h-10 text-center flex items-center justify-center text-white my-8'>N</div>
        <h2>Nestly</h2>
      </div>
      
      <div className='w-full flex justify-between items-center gap-2 px-2'>
        <div className='w-100'>
        <h3 className='text-xs'>Find homes, shop for them, and chat with the people who matter — all in one friendly place.</h3>
        </div>

        <div className='px-2'>
          <h3 className='text-xs'>
            © 2026 Nestly. Crafted with care.
          </h3>
        </div>
      </div>


      </div> 
    </>
  )
}
