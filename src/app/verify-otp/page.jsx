"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
import { useRouter } from 'next/navigation'
export default function VerifyOtpPage() {
  const router=useRouter()

  // inialization of 
  const [errors, setErrors] = useState("")
  const [inputData, setInputData] = useState({
    otp: "",
    email: ""
  })
  const [success, setSuccess] = useState('')

  // function for handleOnChange
  const handleOnChange = (e) => {
    const { name, value } = e.target
    setInputData({ ...inputData, [name]: value })
  }

  // validate by Checking if the input is empty

  const validate = () => {
    let newErrors = {}

    if (!inputData.otp) {
      newErrors.otp = "please fill  in your otp"
      // newErrors.email= "please fill  in your email"
    }

    // (inputData.email && !/\S+@\S+\.\S+/.test(inputData.email)) && (newErrors.email = "please enter a valid email" )
    return newErrors
  }

  // function for formHandling
  const handleSubmit = async (e) => {
    // prevent form default submission
    e.preventDefault()

    // const validationErrors = validate()
    // if(Object.keys(validationErrors).length == 0){
    setErrors('')

    //  send request to /api/verify-
    try {
      console.log("FORM DATA", inputData)
      const res = await axios.post('/api/verify-otp', inputData)
      if (res.status == 200) {
        router.push('/sign-in')
      }
    }

    catch (error) {
      console.error("VERIFY OTP ERROR", error.message)
      setErrors(error.response.data.message)
    }

    // }
    // else{
    // setErrors(validationErrors)
    // console.log(errors)
    // }
  }

  // resend otp
  const handleResend = async () => {

    try {

      const res = await axios.post('/api/resend-otp', inputData.email)

      if (res.status == 200) {
        setSuccess("otp send to email address")
        
      }
    }
    
    catch (error) {
      setErrors(error.response.data.message)
      console.error("VERIFY OTP ERROR", error.message)
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
              {errors && (<p className='text-red-500 font-mono font-semibold text-xs italic text-center'>{errors}</p>)}
              {success && (<p className='text-green-500 font-mono font-semibold text-xs italic text-center'>{success}</p>)}

              <div className=''>
                <label className='block px-2 py-2 text-sm'>Otp</label>
                <input type="text" name='otp' onChange={handleOnChange} className='w-full border border-black/25 py-2 px-2 outline-none hover:outline-1 rounded-full placeholder:px-3 text-sm' />
                {errors.otp && (<p className='text-red-500 font-mono font-semibold text-xs italic'>{errors.otp}</p>)}

                <label className='block px-2 py-2 text-sm'>Email</label>
                <input type="email" name='email' onChange={handleOnChange} className='w-full border border-black/25 py-2 px-2 outline-none hover:outline-1 rounded-full placeholder:px-3 text-sm' />
              </div>

              {errors.email && (<p className='text-red-500 font-mono font-semibold text-xs italic'>{errors.email}</p>)}

              <div className='w-full flex justify-between items-center gap-2 py-4 px-3'>
                <Link href="/sign-in" className='italic text-sm'>Goback to sign in</Link>
              </div>

              <div className='w-full py-3 px-4'>
                <button type='submit' className='w-80 bg-orange-600 py-3 text-white cursor-pointer rounded-full'>Reset</button>
              </div>

            </form>

            {
              errors && (

                <form onSubmit={handleResend}>

                  <button class="bg-orange-600 text-white rounded-full text-[8px]">Resend otp</button>
                </form>
              )
            }
          </div>
        </div>
      </div>
    </>
  )
}
