import mongoose from "mongoose";
import { Document, Schema } from "mongoose";

export interface IAddress extends Document {
  line1: string;
  line2?: string;
  cityTown: string;
  countyState: string;
  postZipcode: string;
}

export const addressSchema: Schema = new mongoose.Schema({
  line1: {
    type: String,
  },
  line2: {
    type: String,
  },
  cityTown: {
    type: String,
  },
  countyState: {
    type: String,
  },
  postZipcode: {
    type: String,
  },
});

const Address = mongoose.model<IAddress>("Address", addressSchema);

export default Address;
