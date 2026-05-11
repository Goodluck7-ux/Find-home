"use client"
import Image from 'next/image';
import React, { useState } from 'react'

export default function Seller() {
  const [errors, setErrors] = useState("")
  // Updated to handle arrays
  const [selectedImages, setSelectedImages] = useState([]); 
  const [previews, setPreviews] = useState([]); 

  const [inputData, setInputData] = useState({
    title: "",
    description: "",
    price: "",
    location: "",
    propertytype: "",
    numberofbedbath: "",
    image: "", // Note: You might want to update this to an array in your backend logic later
    conname: "",
    email: "",
    phonenum: "",
  })

  // Updated function to handle 4 images
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    
    // Limit to 4 images
    const limitedFiles = files.slice(0, 4);

    if (limitedFiles.length > 0) {
      setSelectedImages(limitedFiles);
      
      // Create multiple preview URLs
      const imageUrls = limitedFiles.map(file => URL.createObjectURL(file));
      setPreviews(imageUrls);

      // Update inputData for validation (using the first image or count)
      setInputData({ ...inputData, image: limitedFiles });
    }
  };

  const handleUpload = () => {
    if (selectedImages.length === 0) {
      alert("Please select at least one image");
      return;
    }

    alert(`${selectedImages.length} images selected successfully!`);
    
    const data = {
      ...inputData,
      image: selectedImages,
    };

    console.log(data);
    alert("Property submitted successfully!");
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target
    setInputData({ ...inputData, [name]: value })
  }

  const validate = () => {
    let newErrors = {}
    if (!inputData.title) newErrors.title = "please fill in property Title"
    if (!inputData.description) newErrors.description = "please fill in property description"
    if (!inputData.price) newErrors.price = "please fill in property Price"
    if (!inputData.phonenum) newErrors.phonenum = "please fill in property Phone Number"
    if (!inputData.numberofbedbath) newErrors.numberofbedbath = "please fill in Number Of bedroom or Bathroom"
    if (!inputData.propertytype) newErrors.propertytype = "please fill in Types Of Property"
    if (!inputData.location) newErrors.location = "please fill in property Location"
    if (!inputData.conname) newErrors.conname = "please fill in Seller Name"
    if (!inputData.email) newErrors.email = "please fill in Seller Email"
    // Validate that images are uploaded
    if (!inputData.image || inputData.image.length === 0) {
      newErrors.image = "please upload at least one Property Image"
    }
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length == 0) {
      setErrors('')
      handleUpload(); // Trigger upload logic
    } else {
      setErrors(validationErrors)
    }
  };

  return (
    <>
      <div className='w-full h-full bg-orange-50 flex justify-center items-center gap-2 py-10'>
        <div className='border bg-white border-black/25 w-100 h-auto rounded-2xl px-3 shadow-xl '>
          <div className=' w-60 py-10 px-2'>
            <h1 className='text-3xl font-bold text-orange-600'>Welcome to Nestly</h1>
            <p className='text-sm font-light'>List your property</p>
          </div>

          <div className='w-full h-auto'>
            <form onSubmit={handleSubmit}>
              {/* Text Inputs remain exactly the same as your original code */}
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
                <input type="text" name='price' placeholder='enter your property price' onChange={handleOnChange} className='w-full border border-black/25 py-2 px-2 outline-none hover:outline-1 rounded-full placeholder:px-3 text-sm' />
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
                <input type="number" name='numberofbedbath' placeholder='enter Number of Bedrooms and Bathrooms' onChange={handleOnChange} className='w-full border border-black/25 py-2 px-2 outline-none hover:outline-1 rounded-full placeholder:px-3 text-sm' />
              </div>
              {errors.numberofbedbath && (<p className='text-red-500 font-mono font-semibold text-xs italic'>{errors.numberofbedbath}</p>)}

              {/* Updated Image Upload Section */}
              <div className='mt-5'>
                <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md mx-auto">
                  <h1 className="text-xl font-bold text-center mb-5 text-orange-600">
                    Upload Property Photos (Max 4)
                  </h1>

                  {/* Multiple Image Preview Grid */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {previews.length > 0 ? (
                      previews.map((url, index) => (
                        <div key={index} className="relative w-full h-24">
                          <Image
                            src={url}
                            alt={`Preview ${index}`}
                            fill
                            className="object-cover border rounded"
                          />
                        </div>
                      ))
                    ) : (
                      <div className="col-span-2 w-full h-24 bg-gray-200 flex items-center justify-center text-gray-500 text-sm">
                        No Images Selected
                      </div>
                    )}
                  </div>

                  <input
                    type="file"
                    accept="image/*"
                    multiple // Allows selecting multiple files
                    onChange={handleImageChange}
                    name='image'
                    className="w-full border p-2 rounded-lg mb-4 text-xs"
                  />
                </div>
              </div>
              {errors.image && (<p className='text-red-500 font-mono font-semibold text-xs italic text-center'>{errors.image}</p>)}

              {/* Contact Information Section remains the same */}
              <div className='mt-5'>
                <p className="font-bold text-orange-600 px-2">Contact Information</p>
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

              <div className='w-full py-3 px-3 flex justify-center'>
                <button type='submit' className='w-full max-w-xs bg-orange-600 py-3 text-white cursor-pointer rounded-full hover:bg-orange-700 transition'>Submit Property</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}