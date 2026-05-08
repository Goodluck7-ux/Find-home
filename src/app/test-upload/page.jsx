"use client";

import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function PropertyForm() {
  const [selectedImages, setSelectedImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // HANDLE IMAGE SELECTION
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    if (files.length + selectedImages.length > 7) {
      alert("Maximum of 7 images allowed");
      return;
    }

    setSelectedImages((prev) => [...prev, ...files]);

    const imagePreviews = files.map((file) =>
      URL.createObjectURL(file)
    );

    setPreviewImages((prev) => [...prev, ...imagePreviews]);
  };

  // REMOVE IMAGE
  const removeImage = (index) => {
    const updatedFiles = [...selectedImages];
    updatedFiles.splice(index, 1);

    const updatedPreviews = [...previewImages];
    updatedPreviews.splice(index, 1);

    setSelectedImages(updatedFiles);
    setPreviewImages(updatedPreviews);
  };

  // UPLOAD TO CLOUDINARY
  const uploadImagesToCloudinary = async () => {
    const uploadedImages = [];

    for (let image of selectedImages) {
      const formData = new FormData();

      formData.append("file", image);
      formData.append(
        "upload_preset",
        process.env.NEXT_PUBLIC_CLOUDINARY_PRESET_NAME
      );

      const res = await axios.post(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        formData
      );

      uploadedImages.push(res.data.secure_url);
    }

    return uploadedImages;
  };

  // SUBMIT FORM
  const onSubmit = async (data) => {
    try {
      setLoading(true);

      if (selectedImages.length === 0) {
        alert("Please select images");
        setLoading(false);
        return;
      }

      const imageUrls = await uploadImagesToCloudinary();

      const payload = {
        rooms: Number(data.rooms),
        bathrooms: Number(data.bathrooms),
        propertyType: data.propertyType,
        location:data.location,
        images: imageUrls,
      };

      console.log("Payload to be sent to backend:", payload);

    //   const res = await axios.post("/api/properties", payload);

    //   if (res.status === 201) {
    //     alert("Property Uploaded Successfully");

    //     reset();

    //     setSelectedImages([]);
    //     setPreviewImages([]);
    //   }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        Add Property
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6"
      >
        {/* ROOMS */}
        <div>
          <label className="block mb-2 font-medium">
            Rooms
          </label>

          <input
            type="number"
            className="w-full border p-3 rounded-lg"
            {...register("rooms", {
              required: "Rooms field is required",
            })}
          />

          {errors.rooms && (
            <p className="text-red-500 text-sm mt-1">
              {errors.rooms.message}
            </p>
          )}
        </div>

        {/* BATHROOMS */}
        <div>
          <label className="block mb-2 font-medium">
            Bathrooms
          </label>

          <input
            type="number"
            className="w-full border p-3 rounded-lg"
            {...register("bathrooms", {
              required: "Bathrooms field is required",
            })}
          />

          {errors.bathrooms && (
            <p className="text-red-500 text-sm mt-1">
              {errors.bathrooms.message}
            </p>
          )}
        </div>

        {/* PROPERTY TYPE */}
        <div>
          <label className="block mb-2 font-medium">
            Property Type
          </label>

          <div className="flex gap-6">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="bungalow"
                {...register("propertyType", {
                  required: "Select property type",
                })}
              />
              Bungalow
            </label>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="duplex"
                {...register("propertyType", {
                  required: "Select property type",
                })}
              />
              Duplex
            </label>
          </div>

          

          {errors.propertyType && (
            <p className="text-red-500 text-sm mt-1">
              {errors.propertyType.message}
            </p>
          )}
        </div>

        <div className="mt-3"> 
            <label className="block mb-2 font-medium">
              Location
            </label>
            <input type="text" placeholder="Enter location" className="w-full border p-3 rounded-lg"
                {...register("location", {
                  required: "Location is required",
                })}
            />

            {errors.location && (
              <p className="text-red-500 text-sm mt-1">
                {errors.location.message}
              </p>
            )}
          </div>

        {/* IMAGE INPUT */}
        <div>
          <label className="block mb-2 font-medium">
            Upload Images
          </label>

          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageChange}
            className="w-full border p-3 rounded-lg"
          />

          <p className="text-sm text-gray-500 mt-2">
            Maximum of 7 images
          </p>
        </div>

        {/* IMAGE PREVIEW */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {previewImages.map((image, index) => (
            <div
              key={index}
              className="relative h-40 rounded-lg overflow-hidden"
            >
              <Image
                src={image}
                alt="Preview"
                fill
                className="object-cover"
              />

              <button
                type="button"
                onClick={() => removeImage(index)}
                className="absolute top-2 right-2 bg-red-500 text-white w-7 h-7 rounded-full"
              >
                X
              </button>
            </div>
          ))}
        </div>

        {/* SUBMIT BUTTON */}
        <button
          type="submit"
          disabled={loading}
          className="bg-black text-white px-6 py-3 rounded-lg"
        >
          {loading ? "Uploading..." : "Upload Property"}
        </button>
      </form>
    </div>
  );
}