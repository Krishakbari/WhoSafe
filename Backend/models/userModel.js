import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  googleId: {
    type: String,
    unique: true,
    sparse: true, // allows multiple users without googleId
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    default: "", // optional for Google users
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    default: "", // not required for Google users
  },
  phone: {
    type: String,
    default: "",
  },
  address1: {
    type: {},
    default: {},
  },
  address2: {
    type: {},
    default: {},
  },
  area: {
    type: String,
    default: "",
  },
  pincode: {
    type: Number,
    default: 0,
  },
  
}, { timestamps: true });

export default mongoose.model("users", userSchema);