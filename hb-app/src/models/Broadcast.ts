import mongoose from "mongoose";
import { Document, Schema } from "mongoose";

export interface IBroadcast extends Document {
  accountId: string;
  broadcastId: string;
  textField: string;
  timestamp: Date;
}

const broadcastSchema: Schema = new mongoose.Schema({
  accountId: {
    type: String,
    ref: "Account",
    required: true,
  },
  broadcastId: {
    type: String,
    required: true,
    unique: true,
  },
  textField: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Broadcast = mongoose.model<IBroadcast>("Broadcast", broadcastSchema);

export default Broadcast;
