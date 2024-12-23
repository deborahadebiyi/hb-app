import mongoose from "mongoose";
import { Document, Schema } from "mongoose";
import { commentSchema, IComment } from "./reference-models/Comment";

export interface IReview extends Document {
  authorId: string;
  authorRole: "service-provider" | "customer";
  authorUsername: string;
  targetId: string;
  targetRole: "service-provider" | "customer";
  reviewTags: string[];
  rating: number;
  textField?: string;
  comment?: IComment;
  likes: number;
  timestamp: Date;
}

const reviewSchema: Schema = new mongoose.Schema<IReview>({
  authorId: {
    type: String,
    ref: "Account",
  },
  authorRole: {
    type: String,
    enum: ["service-provider", "customer"],
  },
  authorUsername: {
    type: String,
  },
  targetId: {
    type: String,
    ref: "Account",
  },
  targetRole: {
    type: String,
    enum: ["service-provider", "customer"],
  },
  reviewTags: {
    type: [String],
    enum: ["punctual", "good communication", "excellent service"],
  },
  rating: {
    type: Number,
  },
  textField: {
    type: String,
    maxlength: 350,
  },
  comment: commentSchema,
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
