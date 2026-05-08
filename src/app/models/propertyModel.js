import mongoose from "mongoose";

const PropertySchema = new mongoose.Schema(
  {
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
      enum: ["bungalow", "duplex"],
      required: true,
    },

    location:{
        type: String,
        required: true,
    },

    approved:{
        type: Boolean,
        default: false,
    },

    propertyImages: {
      type: [String],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Property ||
  mongoose.model("Property", PropertySchema);