import mongoose from "mongoose";
import { Document, Schema } from "mongoose";

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
  isReviewed: boolean;
}
