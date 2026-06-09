import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req) {

   // check for authentication
      const authResult = authenticateRequest(req);
      console.log("Authentication result:", authResult);
      if (authResult.error) {
  
          return authResult.error;
      }
  
      // check if the user is an admin or seller
      const roleResult = authorizeRoles(authResult, ["admin", "seller"]);
      if (roleResult) {
          return roleResult;
      }
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


  try {
    const data = await req.formData();
    const file = data.get("file");

    if (!file) {
      return Response.json({ error: "No file uploaded" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream({ folder: "uploads" }, (error, result) => {
          if (error) reject(error);
          else resolve(result);
        })
        .end(buffer);
    });

    return Response.json({
      url: result.secure_url,
    });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
