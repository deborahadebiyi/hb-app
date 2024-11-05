import mongoose from "mongoose";
import { Document, Schema } from "mongoose";

export interface IServiceProvider extends Document {
  spId: string;
  spName: string;
  username: string;
  password: string;
  email: string;
  telephoneNumber: string;
  socialMedia?: object;
  followers: number;
  // followerList: string[];
  bookingPage?: string;
  country: string;
  location: string;
  services: string[];
  rating: number;
  isPremium: boolean;
  isUnlimited: boolean;
}

const serviceProviderSchema: Schema = new mongoose.Schema({
  spId: {
    type: String,
    required: true,
    unique: true,
  },
  spName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  telephoneNumber: {
    type: String,
    required: true,
    unique: true,
  },
  socialMedia: {
    type: Object,
  },
  followers: {
    type: Number,
    default: 0,
  },
  // followingList: {
  //   type: Array,
  //   ref: "Customer",
  // },
  bookingPage: {
    type: String,
  },
  country: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  services: {
    type: Array,
    required: true,
  },
  rating: {
    type: Number,
    default: 0,
  },
  isPremium: {
    type: Boolean,
  },
  isUnlimited: {
    type: Boolean,
  },
});

const ServiceProvider = mongoose.model<IServiceProvider>(
  "ServiceProvider",
  serviceProviderSchema
);

export default ServiceProvider;
