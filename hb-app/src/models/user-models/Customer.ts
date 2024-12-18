import Account, { IAccount } from "./Account";
import mongoose from "mongoose";
import { Schema } from "mongoose";

export interface ICustomer extends IAccount {
  firstName: string;
  lastName: string;
  following: number;
  followingList: string[];
  watchList: string[];
  dateOfBirth: Date;
}

export const customerSchema: Schema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  following: {
    type: Number,
    default: 0,
  },
  watchList: {
    type: Array,
    default: [],
  },
  followingList: {
    type: Array,
    default: [],
  },
  dateOfBirth: {
    type: Date,
  },
});

export const Customer = Account.discriminator<IAccount>(
  "Customer",
  customerSchema
);
