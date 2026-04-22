"use client"
import React, { useState } from 'react'
import Link from 'next/link'
export default function SignIn() {
   // inialization of 
  const [errors, setErrors] = useState("")
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  })

  // function for handleOnChange
  const handleOnChange = (e) => {
    const { name, value } = e.target
    setInputData({ ...inputData, [name]: value })
  }

   // validate by Checking if the input is empty

  const validate = () => {
    let newErrors = {}

    if(!inputData.email){
      newErrors.email= "please fill  in your email"
    }

    if(!inputData.password ){
      newErrors.password= "please fill in your password"
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
            <h1 className='text-3xl font-bold text-orange-600'>Welcome back</h1>
            <p className='text-sm font-light'>Sign in to continue</p>
          </div>

          <div className='w-full h-auto'>
            <form action="" onSubmit={handleSubmit}>

              <div className=''>
                <label className='block px-2 py-2 text-sm'>Email</label>
                <input type="email" name='email' placeholder='ngalakagift@gmail.com' onChange={handleOnChange} className='w-full border border-black/25 py-2 px-2 outline-none hover:outline-1 rounded-full placeholder:px-3 text-sm' />
              </div>

                {errors.email &&(<p className='text-red-500 font-mono font-semibold text-xs italic'>{errors.email}</p>)}

              <div className=''>
                <label className='block px-2 py-2 text-sm'>Password</label>
                <input type="password" name='password' placeholder='............' onChange={handleOnChange} className='w-full border border-black/25 py-2 px-2 outline-none hover:outline-1 rounded-full placeholder:px-3 text-sm' />
              </div>
                
                 {errors.password &&(<p className='text-red-500 font-mono font-semibold text-xs italic'>{errors.password}</p>)}

              <div className='w-full flex justify-between items-center gap-2 py-4 px-3'>
                <Link href="/sign-up" className='italic text-sm'>I don't have an account</Link>
                <Link href="/forgotten" className='italic text-sm'>Forgotten Password</Link>
              </div>

              <div className='w-full py-3 px-4'>
                <button type='submit' className='w-80 bg-orange-600 py-3 text-white cursor-pointer rounded-full'>Sign in</button>
              </div>
                  
              <div className='w-70 m-auto pb-2'>
                <p className='text-sm italic '>By continuing you agree to our <Link href="/terms" className='text-sm underline'>Terms</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
