import mongoose from "mongoose";
import { Document, Schema } from "mongoose";

export interface IBusiness extends Document {
  businessId: string;
  businessName: string;
  email: string;
  password: string;
  country: string;
  location: string;
  telephoneNumber: string;
  address?: object;
  services: string[];
  openingTimes?: object;
  rating: number;
}

const businessSchema: Schema = new mongoose.Schema({
  businessId: {
    type: String,
    required: true,
    unique: true,
  },
  businessName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  location: {
    type: String,
  },
  telephoneNumber: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: Object,
  },
  services: {
    type: Array,
    required: true,
  },
  openingTimes: {
    type: Object,
  },
  rating: {
    type: Number || 0,
  },
});

const Business = mongoose.model<IBusiness>("Business", businessSchema);

export default Business;
