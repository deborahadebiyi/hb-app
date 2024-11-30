import mongoose from "mongoose";
import { Document, Schema } from "mongoose";
import { v4 as uuidv4 } from "uuid";

export interface IBooking extends Document {
  bookingId: string;
  providerId: string;
  customerId: string;
  customerName: string;
  dateBooked: Date;
  bookingTime: Date;
  servicesBooked: string[];
  bookingAmount: number;
  outstandingAmount: number;
  noShow: boolean;
  isReviewed: boolean;
}

export const bookingSchema: Schema = new mongoose.Schema({
  bookingId: {
    type: String,
    required: true,
    index: true,
    default: uuidv4(),
  },
  providerId: {
    type: String,
    ref: "Account",
    required: true,
  },
  customerId: {
    type: String,
    ref: "Account",
    required: true,
  },
  customerName: {
    type: String,
    ref: "Customer",
    required: true,
  },
  dateBooked: {
    type: Date,
    default: Date.now,
  },
  bookingTime: {
    type: Date,
    default: Date.now,
  },
  servicesBooked: {
    type: Array,
    default: [],
  },
  bookingAmount: {
    type: Number,
  },
});
