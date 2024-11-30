import mongoose from "mongoose";
import { Document, Schema } from "mongoose";
import { IPolicy, policySchema } from "./reference-models/Policy";

export interface IDashboard extends Document {
  providerId: string;
  depositAmount: number;
  bookingPolicy: IPolicy;
  workingHoursEnd: string;
  latestBookingTime: string;
}

export const dashboardSchema: Schema = new mongoose.Schema({
  providerId: {
    type: String,
    ref: "Account",
    required: true,
  },
  depositAmount: {
    type: Number,
  },
  bookingPolicy: policySchema,
  workingHoursEnd: {
    type: String,
  },
  latestBookingTime: {
    type: String,
  },
});
