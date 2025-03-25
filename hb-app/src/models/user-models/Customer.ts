import Account, { IAccount } from "./Account";
import mongoose from "mongoose";
import { Schema } from "mongoose";

export interface ICustomer extends IAccount {
  following: number;
  followingList: string[];
  watchList: string[];
  streak: number;
  dateOfBirth: Date;
}

export const customerSchema: Schema = new mongoose.Schema<ICustomer>({
  following: {
    type: Number,
    default: 0,
  },
  watchList: {
    type: [String],
    default: [],
  },
  followingList: {
    type: [String],
    default: [],
  },
  streak: {
    type: Number,
    default: 0,
  },
  dateOfBirth: {
    type: Date,
  },
});

export const Customer = Account.discriminator<ICustomer>(
  "Customer",
  customerSchema
);
