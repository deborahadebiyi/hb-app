import mongoose from "mongoose";
import { Document, Schema } from "mongoose";
import { v4 as uuidv4 } from "uuid";

export interface IComment extends Document {
  providerName: string;
  commentId: string;
  textField: string;
  timestamp: Date;
}

export const commentSchema: Schema = new mongoose.Schema<IComment>({
  providerName: {
    type: String,
    ref: "ServiceProvider",
    required: true,
  },
  commentId: {
    type: String,
    required: true,
    index: true,
    default: uuidv4(),
  },
  textField: {
    type: String,
    maxlength: 350,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Comment = mongoose.model<IComment>("Comment", commentSchema);

export default Comment;
