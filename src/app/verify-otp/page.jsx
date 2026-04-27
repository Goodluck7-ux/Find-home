"use client"
import React, { useState } from 'react'
import Link from 'next/link'
export default function VerifyOtpPage() {
  
   // inialization of 
    const [errors, setErrors] = useState("")
    const [inputData, setInputData] = useState({
      otp: "",
      email:""
    })
  
    // function for handleOnChange
    const handleOnChange = (e) => {
      const { name, value } = e.target
      setInputData({ ...inputData, [name]: value })
    }
  
     // validate by Checking if the input is empty
  
    const validate = () => {
      let newErrors = {}
  
      if(!inputData.otp){
        newErrors.otp= "please fill  in your email"
        newErrors.email= "please fill  in your email"
      }
      return newErrors
    }
  
     // function for formHandling
      const handleSubmit = (e) => {
          // prevent form default submission
        e.preventDefault()
  
        const validationErrors = validate()
        if(Object.keys(validationErrors).length == 0){
           setErrors('')
        }
        else{
        setErrors(validationErrors)
        console.log(errors)
        }
      }


  return (
    <>
      <div className='w-full h-full bg-orange-50 flex justify-center items-center gap-2 py-10'>
      
              <div className='border bg-white border-black/25 w-100 h-auto rounded-2xl px-3 shadow-xl '>
      
                <div className=' w-60 py-10 px-2'>
                  <h1 className='text-3xl font-bold text-orange-600'>Welcome to Nestly</h1>
                  <p className='text-sm font-light'>Reset your password</p>
                </div>
      
                <div className='w-full h-auto'>
                  <form action="" onSubmit={handleSubmit}>
    
                    <div className=''>
                      <label className='block px-2 py-2 text-sm'>Otp</label>
                      <input type="text" name='otp' onAbortChange={handleOnChange} className='w-full border border-black/25 py-2 px-2 outline-none hover:outline-1 rounded-full placeholder:px-3 text-sm' />
                      <input type="text" name='email' onChange={handleOnChange} className='w-full border border-black/25 py-2 px-2 outline-none hover:outline-1 rounded-full placeholder:px-3 text-sm' />
                    </div>

                 {errors.email &&(<p className='text-red-500 font-mono font-semibold text-xs italic'>{errors.email}</p>)}
            
                    <div className='w-full flex justify-between items-center gap-2 py-4 px-3'>
                      <Link href="/sign-in" className='italic text-sm'>Goback to sign in</Link>
                    </div>
      
                    <div className='w-full py-3 px-4'>
                      <button type='submit' className='w-80 bg-orange-600 py-3 text-white cursor-pointer rounded-full'>Reset</button>
                    </div>
      
                  </form>
                </div>
              </div>
            </div>
    </>
  )
}
