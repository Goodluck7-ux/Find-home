import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req) {
  const data = await req.formData();
  const file = data.get("file");

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const uploadResult = await new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream({}, (error, result) => {
        if (error) reject(error);
        else resolve(result);
      })
      .end(buffer);
  });

  return Response.json({
    url: uploadResult.secure_url,
  });
}

