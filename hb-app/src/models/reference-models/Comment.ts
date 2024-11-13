import mongoose from "mongoose";
import { Document, Schema } from "mongoose";

export interface IComment extends Document {
  commentId: string;
  accountId: string;
  textField: string;
  timestamp: Date;
}

export const commentSchema: Schema = new mongoose.Schema({
  commentId: {
    type: String,
  },
  accountId: {
    type: String,
    ref: "Account",
    required: true,
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
