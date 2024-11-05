import mongoose from "mongoose";
import { Document, Schema } from "mongoose";

export interface IReview extends Document {
  reviewId: string;
  spId: string;
  custId: string;
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
  spId: {
    type: String,
    ref: "ServiceProvider",
  },
  custId: {
    type: String,
    ref: "Customer",
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
