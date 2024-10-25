import mongoose from "mongoose";
import { Document, Schema } from "mongoose";

export interface IServiceProvider extends Document {
  spId: string;
  spName: string;
  username: string;
  password: string;
  email: string;
  number?: string;
  country: string;
  location: string;
  services: string[];
  rating: number;
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
    type: Number || 0,
  },
});

const ServiceProvider = mongoose.model<IServiceProvider>(
  "ServiceProvider",
  serviceProviderSchema
);

export default ServiceProvider;
