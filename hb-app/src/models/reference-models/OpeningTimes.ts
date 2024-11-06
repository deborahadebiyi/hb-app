import mongoose from "mongoose";
import { Document, Schema } from "mongoose";

export interface IOpeningTimes extends Document {
  monday?: string;
  tuesday?: string;
  wednesday?: string;
  thursday?: string;
  friday?: string;
  saturday?: string;
  sunday?: string;
}

export const openingTimesSchema: Schema = new mongoose.Schema({
  monday: {
    type: String,
  },
  tuesday: {
    type: String,
  },
  wednesday: {
    type: String,
  },
  thursday: {
    type: String,
  },
  friday: {
    type: String,
  },
  saturday: {
    type: String,
  },
  sunday: {
    type: String,
  },
});

const OpeningTimes = mongoose.model<IOpeningTimes>(
  "OpeningTimes",
  openingTimesSchema
);

export default OpeningTimes;
