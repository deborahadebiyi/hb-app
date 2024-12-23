import mongoose from "mongoose";
import { Document, Schema } from "mongoose";

export interface IBooking extends Document {
  providerId: string;
  customerId: string;
  customerName: string;
  dateBooked: Date;
  bookingTime: Date;
  servicesBooked: string[];
  bookingAmount: number;
  outstandingAmount: number;
  isCustomerReviewed: boolean;
  isServiceProviderReviewed: boolean;
  createdAt: Date;
}

export const bookingSchema: Schema = new mongoose.Schema<IBooking>({
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
    type: [String],
    default: [],
  },
  bookingAmount: {
    type: Number,
  },
  outstandingAmount: {
    type: Number,
  },
  isCustomerReviewed: {
    type: Boolean,
  },
  isServiceProviderReviewed: {
    type: Boolean,
  },
});

const Booking = mongoose.model<IBooking>("Booking", bookingSchema);

export default Booking;
