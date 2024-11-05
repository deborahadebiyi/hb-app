import mongoose from "mongoose";
import { Document, Schema } from "mongoose";

export interface ICustomer extends Document {
  custId: string;
  username: string;
  password: string;
  email: string;
  telephoneNumber: string;
  following: number;
  followingList: string[];
  country: string;
  location?: string;
  dateOfBirth?: Date;
  rating: number;
}

const customerSchema: Schema = new mongoose.Schema({
  custId: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
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
  following: {
    type: Number,
    default: 0,
  },
  followingList: {
    type: Array,
    ref: "ServiceProvider",
  },
  country: {
    type: String,
    required: true,
  },
  location: {
    type: String,
  },
  dateOfBirth: {
    type: Date,
  },
  rating: {
    type: Number,
    default: 0,
  },
});

const Customer = mongoose.model<ICustomer>("Customer", customerSchema);

export default Customer;
