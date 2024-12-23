import mongoose from "mongoose";
import { Document, Schema } from "mongoose";

export interface IOpeningTime {
  open: string;
  close: string;
}

export interface IOpeningTimes extends Document {
  monday?: IOpeningTime;
  tuesday?: IOpeningTime;
  wednesday?: IOpeningTime;
  thursday?: IOpeningTime;
  friday?: IOpeningTime;
  saturday?: IOpeningTime;
  sunday?: IOpeningTime;
}

export const openingTimeSchema: Schema = new mongoose.Schema<IOpeningTime>({
  open: { type: String, required: true },
  close: { type: String, required: true },
});

export const openingTimesSchema: Schema = new mongoose.Schema<IOpeningTimes>({
  monday: {
    type: openingTimeSchema,
  },
  tuesday: {
    type: openingTimeSchema,
  },
  wednesday: {
    type: openingTimeSchema,
  },
  thursday: {
    type: openingTimeSchema,
  },
  friday: {
    type: openingTimeSchema,
  },
  saturday: {
    type: openingTimeSchema,
  },
  sunday: {
    type: openingTimeSchema,
  },
});

const OpeningTimes = mongoose.model<IOpeningTimes>(
  "OpeningTimes",
  openingTimesSchema
);

export default OpeningTimes;
