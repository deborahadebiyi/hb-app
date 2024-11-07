import mongoose from "mongoose";
import { Document, Schema } from "mongoose";
const options = { discriminatorKey: "kind" };

export interface IAccount extends Document {
  accountId: string;
  username: string;
  password: string;
  email: string;
  telephoneNumber?: string;
  country: string;
  rating: number;
  role: string;
}
const accountSchema: Schema = new mongoose.Schema(
  {
    accountId: {
      type: String,
      required: true,
      unique: true,
      index: true,
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
      required: true,
      unique: true,
      index: true,
    },
    telephoneNumber: {
      type: String,
      required: true,
      unique: true,
    },
    country: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      default: 0,
    },
    role: {
      type: String,
      enum: ["serviceprovider", "customer", "business"],
      required: true,
    },
  },
  options
);

const Account = mongoose.model<IAccount>("Account", accountSchema);

export default Account;
