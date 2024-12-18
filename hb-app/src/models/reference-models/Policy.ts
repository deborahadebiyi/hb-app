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
  defaultPolicies: string[];
  misc: { heading: string; textField: string }[];
}

export const policySchema: Schema = new mongoose.Schema({
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
    type: Array,
  },
  prepRules: {
    type: String,
  },
  dropOffTime: {
    type: String,
  },
  misc: {
    type: Array,
  },
});

const Policy = mongoose.model<IPolicy>("Policy", policySchema);

export default Policy;
