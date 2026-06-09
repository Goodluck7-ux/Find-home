import PropertyModel from "@/app/models/propertyModel";
import connectToDb from "@/lib/connection";

export const PATCH = async (req, { params }) => {
    // desturcture id from params
    // const  id  =await params.id
    const { id } = await params

    // find property by id and update its status to approved
    try {
        await connectToDb();
        // const property = await PropertyModel.findById(id);
        // if (!property) {
        //     return Response.json({
        //         success: false,
        //         message: "Property not found"
        //     }, { status: 404 })
        // }


        // property.approved = true;
        // property.status = "approved";


        // await property.save();

        // other way using findByIdAndUpdate
        const property = await PropertyModel.findByIdAndUpdate(id,
            { status: "approved", approved: true },
            { returnDocument: "after" } 
        )// this option returns the updated document);
        if (!property) {
            return Response.json({
                success: false,
                message: "Property not found"
            }, { status: 404 });
        }
        console.log("Property after approval:", property);
        return Response.json({
            success: true,
            message: "Property approved successfully",
            property
        });
    } catch (error) {
        console.error("Error approving property", error);
        return Response.json({
            status: false,
            message: "Failed to approve property"
        }, { status: 500 });
    }
}