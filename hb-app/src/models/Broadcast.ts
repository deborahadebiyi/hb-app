import mongoose from "mongoose";
import { Document, Schema } from "mongoose";

export interface IBroadcast extends Document {
  broadcastId: string;
  textField: string;
  timestamp: Date;
  spId: string;
}

const broadcastSchema: Schema = new mongoose.Schema({
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
  spId: {
    type: String,
    ref: "ServiceProvider",
  },
});

const Broadcast = mongoose.model<IBroadcast>("Broadcast", broadcastSchema);

export default Broadcast;
