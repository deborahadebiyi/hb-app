import mongoose from "mongoose";
import { Document, Schema } from "mongoose";
import { v4 as uuidv4 } from "uuid";
import { commentSchema, IComment } from "./reference-models/Comment";

export interface IReview extends Document {
  reviewId: string;
  providerId: string;
  customerId: string;
  username: string;
  ratingTags: string[];
  rating: number;
  textField?: string;
  comment?: IComment;
  likes: number;
  timestamp: Date;
}

const reviewSchema: Schema = new mongoose.Schema({
  reviewId: {
    type: String,
    required: true,
    unique: true,
    default: uuidv4(),
  },
  accountId: {
    type: String,
    ref: "Account",
    required: true,
  },
  customerId: {
    type: String,
    ref: "Account",
    required: true,
  },
  username: {
    type: String,
    ref: "Account",
    required: true,
  },
  ratingTags: {
    type: Array,
  },
  rating: {
    type: Number,
  },
  textField: {
    type: String,
    maxlength: 350,
  },
  comment: {
    type: commentSchema,
  },
  likes: {
    type: Number,
    default: 0,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Review = mongoose.model<IReview>("Review", reviewSchema);

export default Review;
