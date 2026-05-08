"use client"
import Image from 'next/image';
import React, { useState } from 'react'
export default function Seller() {
  // inialization of 
  const [errors, setErrors] = useState("")
  // State to store the selected image
  const [selectedImage, setSelectedImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const [inputData, setInputData] = useState({

    title: "",
    description: "",
    price: "",
    location: "",
    propertytype: "",
    numberofbedbath: "",
    image: "",
    conname: "",
    email: "",
    phonenum: "",
  })


  // Function to handle image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    // Check if file exists
    if (file) {
      setSelectedImage(file);
      // Create image preview URL
      const imageUrl = URL.createObjectURL(file);

      // Save image URL in state

      setPreview(imageUrl)
    }
  };

  // Function to handle upload button
  const handleUpload = () => {
    if (!selectedImage) {
      alert("Please select an image first");
      return;
    }

    
    alert("Image selected successfully!");
    console.log(selectedImage);

     const data = {
        ...inputData,
        image: selectedImage,
      };

      console.log(data);
      alert("Property submitted successfully!");
  };

  

  // function for handleOnChange

  const handleOnChange = (e) => {
    const { name, value } = e.target
    setInputData({ ...inputData, [name]: value })

  }

  // validate by Checking if the input is empty

  const validate = () => {
    let newErrors = {}

    if (!inputData.title) {
      newErrors.title = "please fill  in property Title"
    }

    if (!inputData.description) {
      newErrors.description = "please fill  in property description"
    }

    if (!inputData.price) {
      newErrors.price = "please fill  in property Price"
    }

    if (!inputData.phonenum) {
      newErrors.phonenum= "please fill  in property Phone Number"
    }

    if (!inputData.numberofbedbath) {
      newErrors.numberofbedbath = "please fill  in Number Of bedroom or Bathroom"
    }

    if (!inputData.propertytype) {
      newErrors.propertytype = "please fill  in Types Of Property"
    }

     if (!inputData.location) {
      newErrors.location = "please fill  in property Location"
    }

     if (!inputData.conname) {
      newErrors.conname = "please fill  in Seller Name"
    }

     if (!inputData.email) {
      newErrors.email = "please fill  in Seller Email"
    }

     if (!inputData.image) {
      newErrors.image = "please upload Property Image"
    }
    
    return newErrors
  }




  // function for formHandling
  const handleSubmit = (e) => {
    // prevent form default submission
    e.preventDefault()

    const validationErrors = validate()
    if (Object.keys(validationErrors).length == 0) {
      setErrors('')

    }

    else {
      setErrors(validationErrors)
      console.log(errors)
    }
  };


  return (
    <>
      <div className='w-full h-full bg-orange-50 flex justify-center items-center gap-2 py-10'>

        <div className='border bg-white border-black/25 w-100 h-auto rounded-2xl px-3 shadow-xl '>

          <div className=' w-60 py-10  px-2'>
            <h1 className='text-3xl font-bold text-orange-600'>Welcome to Nestly</h1>
            <p className='text-sm font-light'>Reset your password</p>
          </div>

          <div className='w-full h-auto'>
            <form action="" onSubmit={handleSubmit}>

              <div className=''>
                <label className='block px-2 py-2 text-sm'>Property Title</label>
                <input type="text" name='title' placeholder='enter your property title' onChange={handleOnChange} className='w-full border border-black/25 py-2 px-2 outline-none hover:outline-1 rounded-full placeholder:px-3 text-sm' />
              </div>

              {errors.title && (<p className='text-red-500 font-mono font-semibold text-xs italic'>{errors.title}</p>)}

              <div className=''>
                <label className='block px-2 py-2 text-sm'>Description of the Property</label>
                <input type="text" name='description' placeholder='enter your Description of the Property' onChange={handleOnChange} className='w-full border border-black/25 py-2 px-2 outline-none hover:outline-1 rounded-full placeholder:px-3 text-sm' />
              </div>

              {errors.description && (<p className='text-red-500 font-mono font-semibold text-xs italic'>{errors.description}</p>)}


              <div className=''>
                <label className='block px-2 py-2 text-sm'>Price</label>
                <input type="text" name='price' placeholder='enter your prpperty price' onChange={handleOnChange} className='w-full border border-black/25 py-2 px-2 outline-none hover:outline-1 rounded-full placeholder:px-3 text-sm' />
              </div>

              {errors.price && (<p className='text-red-500 font-mono font-semibold text-xs italic'>{errors.price}</p>)}

              <div className=''>
                <label className='block px-2 py-2 text-sm'>Location</label>
                <input type="text" name='location' placeholder='enter your property Location' onChange={handleOnChange} className='w-full border border-black/25 py-2 px-2 outline-none hover:outline-1 rounded-full placeholder:px-3 text-sm' />
              </div>

              {errors.location && (<p className='text-red-500 font-mono font-semibold text-xs italic'>{errors.location}</p>)}


              <div className=''>
                <label className='block px-2 py-2 text-sm'>Property Type</label>
                <input type="text" name='propertytype' placeholder='enter your property type' onChange={handleOnChange} className='w-full border border-black/25 py-2 px-2 outline-none hover:outline-1 rounded-full placeholder:px-3 text-sm' />
              </div>

              {errors.propertytype && (<p className='text-red-500 font-mono font-semibold text-xs italic'>{errors.propertytype}</p>)}


              <div className=''>
                <label className='block px-2 py-2 text-sm'> Number of Bedrooms and Bathrooms</label>
                <input type="number" name='numberofbedbath' placeholder='enter  Number of Bedrooms and Bathrooms' onChange={handleOnChange} className='w-full border border-black/25 py-2 px-2 outline-none hover:outline-1 rounded-full placeholder:px-3 text-sm' />
              </div>

              {errors.numberofbedbath && (<p className='text-red-500 font-mono font-semibold text-xs italic'>{errors.numberofbedbath}</p>)}


              <div className=''>

                <div className="flex items-center justify-center min-h-screen bg-gray-100 p-5">
                  <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md">

                    {/* Title */}
                    <h1 className="text-2xl font-bold text-center mb-5 text-orange-600">
                      Upload Property Photos
                    </h1>

                    {/* Image Preview */}
                    <div className="flex justify-center mb-4">
                      {preview ? (
                        <Image
                          src={preview}
                          alt="Preview"
                          width={300}
                          height={300}
                          className=" object-cover border"
                        />
                      ) : (
                        <div className="w-37.5  h-37.5 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                          No Image
                        </div>
                      )}
                    </div>

                    {/* File Input */}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      name='image'
                      className="w-full border p-2 rounded-lg mb-4"
                    />

                    {/* Upload Button */}
                    <button
                      onClick={handleUpload}
                      className="w-full bg-orange-600 text-white py-2 rounded-full hover:bg-blue-700 transition"
                    >
                      Upload Image
                    </button>
                  </div>
                </div>
                
              </div>

              {errors.image && (<p className='text-red-500 font-mono font-semibold text-xs italic'>{errors.image}</p>)}

              <div>
                <p>Contact Information</p>

                <div className=''>
                  <label className='block px-2 py-2 text-sm'> Name</label>
                  <input type="text" name='conname' placeholder='contact Name' onChange={handleOnChange} className='w-full border border-black/25 py-2 px-2 outline-none hover:outline-1 rounded-full placeholder:px-3 text-sm' />
                </div>

                {errors.conname && (<p className='text-red-500 font-mono font-semibold text-xs italic'>{errors.conname}</p>)}


                <div className=''>
                  <label className='block px-2 py-2 text-sm'>Email</label>
                  <input type="email" name='email' placeholder='contact Email address' onChange={handleOnChange} className='w-full border border-black/25 py-2 px-2 outline-none hover:outline-1 rounded-full placeholder:px-3 text-sm' />
                </div>

                {errors.email && (<p className='text-red-500 font-mono font-semibold text-xs italic'>{errors.email}</p>)}


                <div className=''>
                  <label className='block px-2 py-2 text-sm'> Phone Number</label>
                  <input type="text" name='phonenum' placeholder='contact phone Number' onChange={handleOnChange} className='w-full border border-black/25 py-2 px-2 outline-none hover:outline-1 rounded-full placeholder:px-3 text-sm' />
                </div>

                {errors.phonenum && (<p className='text-red-500 font-mono font-semibold text-xs italic'>{errors.phonenum}</p>)}


              </div>
              <div className='w-full py-3 px-3'>
                <button type='submit' className='w-80 bg-orange-600 py-3 text-white cursor-pointer rounded-full'>Submit</button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </>
  )
}
