import PropertyModel from "@/app/models/propertyModel";
import User from "@/app/models/userModel";

import connectToDb from "@/lib/connection";
import { authorizeRoles } from "@/lib/verify-roles";
import { authenticateRequest } from "@/lib/verify-token";

export const POST = async (req, res) => {

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

    // Handle POST request
    // destructure the request body to get the property details
    const {
        propertyTitle,
        propertySize,
        featuredProperty,
        rooms,
        bathrooms,
        propertyType,
        country,
        city,
        price,
        propertyImages
    } = await req.json();

    console.log("POST request received with data:", req.body);

    //   validate the input data
    if (!propertySize ||
        !propertyTitle ||
        !rooms ||
        !bathrooms ||
        !propertyType ||
        !country ||
        !city ||
        !propertyImages) {
        return Response.json({ message: "All fields are required" }, { status: 400 });
    }

    try {
        // call databse connection
        await connectToDb();
        const newProperty = await PropertyModel.create({
            listedBy: authResult.userId,
            propertyTitle,
            propertySize,
            featuredProperty: featuredProperty || false, // default to false if not provided
            rooms,
            bathrooms,
            propertyType,
            country,
            city,
            price,
            propertyImages,
        })

        if (!newProperty) {
            return Response.json({
                error: true,
                message: "Failed to create property"
            },
                { status: 400 });
        }

        return Response.json({
            error: false,
            message: "Property Created successfully",
        },
            {
                status: 201
            }
        )

    }

    catch (error) {
        console.error("Error creating property:", error);
        return Response.json({
            message: "Failed to create property",
            error: error.message
        }, { status: 500 });
    }
}


// GET request handler to fetch all properties from the database
export const GET = async (req, res) => {

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

    try {
        await connectToDb();

        // fetch all properties with status "approved", 
        // populate the listedBy field with the user's first name and 
        // email, and sort by creation date in descending order
        const properties = await PropertyModel.find()
            .populate("listedBy", "firstName email -_id")
            .sort({ createdAt: -1 })
        return Response.json({ properties }, { status: 200 });
    }

    catch (error) {
        console.error("Error fetching properties:", error);
        return Response.json({ message: "Failed to fetch properties" }, { status: 500 });
    }
}