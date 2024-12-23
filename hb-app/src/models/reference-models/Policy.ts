import mongoose from "mongoose";
import { Document, Schema } from "mongoose";

export interface IPolicy extends Document {
  providerId: string;
  lateFee: number;
  outOfHoursFee: number;
  cancellationFee: number;
  noShowFee: number;
  lateDropOff: number;
  prepRules: string;
  dropOffTime: string;
  defaultPolicies: string[]; //rethink this
  policyImage?: string; //store in s3 bucket
  misc: { title: string; text: string }[];
}

export const policySchema: Schema = new mongoose.Schema<IPolicy>({
  providerId: {
    type: String,
    ref: "Account",
    required: true,
  },
  lateFee: {
    type: Number,
  },
  outOfHoursFee: {
    type: Number,
  },
  cancellationFee: {
    type: Number,
  },
  noShowFee: {
    type: Number,
  },
  lateDropOff: {
    type: Number,
  },
  defaultPolicies: {
    type: [String],
  },
  prepRules: {
    type: String,
  },
  dropOffTime: {
    type: String,
  },
  policyImage: {
    type: String,
  },
  misc: {
    type: [Object],
  },
});

const Policy = mongoose.model<IPolicy>("Policy", policySchema);

export default Policy;
