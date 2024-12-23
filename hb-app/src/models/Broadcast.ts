import mongoose from "mongoose";
import { Document, Schema } from "mongoose";
import { v4 as uuidv4 } from "uuid";

export interface IBroadcast extends Document {
  accountId: string;
  textField: string;
  timestamp: Date;
}

const broadcastSchema: Schema = new mongoose.Schema<IBroadcast>({
  accountId: {
    type: String,
    ref: "Account",
    required: true,
  },
  textField: {
    type: String,
    required: true,
    maxlength: 350,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Broadcast = mongoose.model<IBroadcast>("Broadcast", broadcastSchema);

export default Broadcast;
