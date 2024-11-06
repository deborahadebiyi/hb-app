import mongoose from "mongoose";
import { Document, Schema } from "mongoose";

export interface ISocialMedia extends Document {
  instagram?: string;
  tiktok?: string;
  pinterest?: string;
  facebook?: string;
  twitter?: string;
  snapchat?: string;
}

export const socialMediaSchema: Schema = new mongoose.Schema({
  instagram: {
    type: String,
  },
  tiktok: {
    type: String,
  },
  pinterest: {
    type: String,
  },
  facebook: {
    type: String,
  },
  twitter: {
    type: String,
  },
  snapchat: {
    type: String,
  },
});

const SocialMedia = mongoose.model<ISocialMedia>(
  "SocialMedia",
  socialMediaSchema
);

export default SocialMedia;
