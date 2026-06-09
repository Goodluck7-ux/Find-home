"use client";


import axios from "axios";
import Image from "next/image";
import { useState } from "react";

// install react-hook-form
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import ProtectedRoutes from "@/component/ProtectedRoutes";

export default function PropertyForm() {

    const [selectedImages, setSelectedImages] = useState([]);
    const [previewImages, setPreviewImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");

    const formatPrice = (value) => {
        // Remove non-digit characters
        const numericValue = value.replace(/\D/g, "");

        // Format with commas
        return numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    // destructure useForm to get register, handleSubmit, errors, and reset functions
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

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


    const removeImage = (index) => {
        const updatedFiles = [...selectedImages];
        updatedFiles.splice(index, 1);

        const updatedPreviews = [...previewImages];
        updatedPreviews.splice(index, 1);

        setSelectedImages(updatedFiles);
        setPreviewImages(updatedPreviews);
    };

    // CLOUDINARY UPLOAD STARTS HERE
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

    //CLOUDINARY UPLOAD ENDS HERE

    const onSubmit = async (data) => {
        try {
            setLoading(true);

            if (selectedImages.length === 0) {
                alert("Please select images");
                setLoading(false);
                return;
            }

            // take pictures and upload to cloudinary, 
            // get the urls and send to the backend along with the rest of the form data
            const imageUrls = await uploadImagesToCloudinary();

            const payload = {
                propertyTitle: data.propertyTitle,
                rooms: Number(data.rooms),
                bathrooms: Number(data.bathrooms),
                propertyType: data.propertyType,
                city: data.city,
                country: data.country,
                price: Number(data.price),
                propertySize: Number(data.propertySize) || 100,
                featuredProperty: data.featuredProperty === "true" ? true : false,
                propertyImages: imageUrls,
            };
            console.log("THIS IS THE FORM DATA", data)

            console.log("Payload to be sent to backend:", payload);

            const res = await axios.post("/api/properties",  {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`,
                },
            })

            console.log(res)

            if (res.data) {
                setSuccessMessage("Property uploaded successfully!");
                toast.success(res.data.message)

                reset();

                setSelectedImages([]);
                setPreviewImages([]);
            }
        } catch (error) {
            console.log(error);

        } finally {
            setLoading(false);
        }
    };

    return (
        <ProtectedRoutes allowedRoles={['seller']}>
            <div className="">

                {
                    successMessage && (
                        <div className="absolute w-60 h-20 bg-green-700 rounded-md r-0 t-60 flex items-center justify-center">
                            <p className="text-white font-medium">  {successMessage} </p>
                        </div>
                    )
                }

                <div className="max-w-3xl mx-auto p-6">
                    <h1 className="text-3xl font-bold mb-6">
                        Add Property
                    </h1>

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="space-y-6"
                    >
                        <div>
                            <label className="block mb-2 font-medium">
                                propertyTitle
                            </label>

                            <input
                                type="text"
                                className="w-full border p-3 rounded-lg"
                                {...register("propertyTitle", {
                                    required: "Property title is required",
                                })}
                            />

                            {errors.propertyTitle && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.propertyTitle.message}
                                </p>
                            )}
                        </div>


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

                        <div>
                            <label className="flex items-center gap-2">   Property Size (m2) </label>
                            <input
                                type="text"
                                className="w-full border p-3 rounded-lg"
                                {...register("propertySize", {
                                    required: "Select property size",
                                })}
                            />

                            {
                                errors.propertySize && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.propertySize.message}
                                    </p>
                                )
                            }

                        </div>

                        <div className="mt-3 flex">

                            <div className="mr-4 flex-1">
                                <label className="block mb-2 font-medium">
                                    City
                                </label>
                                <input type="text" placeholder="Enter city" className="w-full border p-3 rounded-lg"
                                    {...register("city", {
                                        required: "city is required",
                                    })}
                                />

                                {errors.city && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.city.message}
                                    </p>
                                )}

                            </div>

                            <div className="flex-1">
                                <label className="block mb-2 font-medium">Country</label>

                                <input type="text" placeholder="Enter property country location" className="w-full border p-3 rounded-lg"
                                    {
                                    ...register("country", {
                                        required: "Country is required"
                                    })
                                    }
                                />
                                {errors.country && (
                                    <p className="text-red-600 text-sm mt-1">
                                        {errors.country.message}
                                    </p>
                                )}
                            </div>


                        </div>

                        <div>

                            <label htmlFor="price">Price</label>
                            <input type="number" placeholder="100000" className="w-full border p-3 rounded-lg"
                                {...register("price", {
                                    required: "Price is required",
                                })}

                            // onInput={(e) => {
                            //     e.target.value = formatPrice(e.target.value);
                            // }}
                            />
                        </div>

                        <div>
                            <label htmlFor="">A featured Property</label>
                            <input type="checkbox" name="featuredProperty" id="featuredProperty" value="true" {...register("featuredProperty")

                            } />
                        </div>


                        {errors.price && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.price.message}
                            </p>
                        )}

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
            </div>
        </ProtectedRoutes>
            );
}