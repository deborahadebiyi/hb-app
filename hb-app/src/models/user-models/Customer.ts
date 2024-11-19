import Account, { IAccount } from "./Account";
import mongoose from "mongoose";

export interface ICustomer extends IAccount {
  fullName: string;
  following: number;
  followingList: string[];
  dateOfBirth: Date;
}

const Customer = Account.discriminator<ICustomer>(
  "Customer",
  new mongoose.Schema({
    fullName: {
      type: String,
      required: true,
    },
    following: {
      type: Number,
      default: 0,
    },
    followingList: {
      type: Array,
      default: [],
    },
    dateOfBirth: {
      type: Date,
    },
  })
);

export default Customer;
