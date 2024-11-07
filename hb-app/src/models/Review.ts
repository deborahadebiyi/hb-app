import mongoose from "mongoose";
import { Document, Schema } from "mongoose";

export interface IReview extends Document {
  reviewId: string;
  accountId: string;
  username: string;
  ratingTags: string[];
  rating: number;
  comment: string;
  likes: number;
  timestamp: Date;
}

const reviewSchema: Schema = new mongoose.Schema({
  reviewId: {
    type: String,
    required: true,
    unique: true,
  },
  accountId: {
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
  comment: {
    type: String,
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
