import PropertyModel from "@/app/models/propertyModel";
import connectToDb from "@/lib/connection";
import { authorizeRoles } from "@/lib/verify-roles";
import { authenticateRequest } from "@/lib/verify-token";

export const GET = async (req) => {

    // check for authentication
    const authResult = authenticateRequest(req);
    console.log("Authentication result:", authResult);
    if (authResult.error) {

        return authResult.error;
    }

    console.log("Authenticated user:", authResult);
    // check if the user is an admin 
    const roleResult = authorizeRoles(authResult, ["admin"]);
    if (roleResult) {
        return roleResult;
    }
    try {
        await connectToDb();
        const properties = await PropertyModel.find({ status: "pending" })
            .select("propertyTitle propertyImages city country createdAt") // selected only required fields to optimize query performance
            .sort({ createdAt: -1 })
            .lean() //convert mongoose documents to plain JavaScript objects
            .populate("listedBy", "firstName email   -_id")

        return Response.json({
            status: true,
            properties,
        }, { status: 200 })
    }
    catch (error) {
        console.error("Error fetching pending properties", error);
        return Response.json({
            status: false,
            message: "Failed to fetch pending properties"
        }, { status: 500 })


    }
}