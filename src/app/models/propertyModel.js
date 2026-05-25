import mongoose from "mongoose";

const PropertySchema = new mongoose.Schema(
  {

    listedBy: {
      type:mongoose.Schema.Types.ObjectId,
      ref: "user", // reference to the user who listed the property, 
      // REMEBER TO ALWAYS USE CAPITALE LETTER TO NAME YOU MODEL "user" is not "User"
      required: true,
    },

    propertyTitle: {
      type: String,
      required: true,
    },

    rooms: {
      type: Number,
      required: true,
    },

    bathrooms: {
      type: Number,
      required: true,
    },

    propertyType: {
      type: String,
      enum: ["bungalow", "duplex", "studio"],
      required: true,
    },

    propertySize:{
      type:Number,
      required: true, 
    },

    country:{
        type: String,
        required: true,
    },

    city:{
        type: String,
        required: true,
    },

    price:{
        type: Number,
        required: true,
    },  

    status:{
        type: String,
        enum:["approved", "rejected", "pending"],
        default:"pending"
    },

    rejectionReason:{
      type:String,

    },

    propertyImages: {
      type: [String],
      required: true,
    },

    featuredProperty:{
      type: Boolean,
      default: false,
    }
  },
  {
    timestamps: true,
  }
);

const PropertyModel= mongoose.models.Property ||
  mongoose.model("Property", PropertySchema);

  export default PropertyModel;