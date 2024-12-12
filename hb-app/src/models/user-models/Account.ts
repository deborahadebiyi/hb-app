import mongoose from "mongoose";
import { Document, Schema } from "mongoose";
import { v4 as uuidv4 } from "uuid";
const options = { discriminatorKey: "kind" };

export interface IAccount extends Document {
  accountId: string;
  username: string;
  password: string;
  email: string;
  telephoneNumber?: string;
  isVerified: boolean;
  country: string;
  rating: number;
  ratingCount: number;
  role: string;
  accountCreatedAt: Date;
}
const accountSchema: Schema = new mongoose.Schema(
  {
    accountId: {
      type: String,
      required: true,
      unique: true, // ? might not be necessary, uuids should be unique
      index: true,
      default: uuidv4(),
    },
    username: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      index: true,
    },
    telephoneNumber: {
      type: String,
      required: [true, "contact number is required"],
      unique: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    country: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      default: 0,
    },
    ratingCount: {
      type: Number,
      default: 0,
    },
    role: {
      type: String,
      enum: ["serviceprovider", "customer", "business"],
      required: true,
    },
    accountCreatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  options
);

const Account = mongoose.model<IAccount>("Account", accountSchema);

export default Account;
