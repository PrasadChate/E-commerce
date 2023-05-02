import mongoose from "mongoose";
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      requited: true,
    },
    category: {
      type: mongoose.ObjectId,
      ref: "Category",
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    photo: {
      data: Buffer, //it is used to save photos in mongodb
      contentType: String,
    },
    shipping: {
      type: Boolean,
    },
  },
  { timestamps: true }
);
export default mongoose.model("Products", productSchema);
