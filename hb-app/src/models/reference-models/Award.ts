import mongoose from "mongoose";
import { Document, Schema } from "mongoose";

export interface IAward extends Document {
  providerId: string;
  dateAwarded: Date;
  awardTitle: string;
}

export const awardSchema: Schema = new mongoose.Schema<IAward>({
  providerId: {
    type: String,
    ref: "Account",
    required: true,
  },
  dateAwarded: {
    type: Date,
    required: true,
  },
  awardTitle: {
    type: String,
    required: true,
  },
});

const Award = mongoose.model<IAward>("Award", awardSchema);

export default Award;
