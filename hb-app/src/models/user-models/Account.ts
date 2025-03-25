import mongoose from "mongoose";
import { Document, Schema } from "mongoose";
import { v4 as uuidv4 } from "uuid";
const options = { discriminatorKey: "role" };

export interface IAccount extends Document {
  accountId: string;
  clerkId: string;
  role: string;
  accountCreatedAt: Date;
}
const accountSchema: Schema = new mongoose.Schema<IAccount>(
  {
    accountId: {
      type: String,
      required: true,
      unique: true, // ? might not be necessary, uuids should be unique
      index: true,
      default: uuidv4(),
    },
    clerkId: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    role: {
      type: String,
      enum: ["serviceprovider", "customer"],
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
