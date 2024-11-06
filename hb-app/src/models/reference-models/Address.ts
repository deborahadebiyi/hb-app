import mongoose from "mongoose";
import { Document, Schema } from "mongoose";

export interface IAddress extends Document {
  line1: string;
  line2?: string;
  city: string;
  county: string;
  postcode: string;
}

export const addressSchema: Schema = new mongoose.Schema({
  line1: {
    type: String,
  },
  line2: {
    type: String,
  },
  city: {
    type: String,
  },
  county: {
    type: String,
  },
  postcode: {
    type: String,
  },
});

const Address = mongoose.model<IAddress>("Address", addressSchema);

export default Address;
