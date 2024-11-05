import { IAccount } from "./Account";
import { Schema } from "mongoose";
import mongoose from "mongoose";
import {
  premiumSubscriptionSchema,
  unlimitedSubscriptionSchema,
} from "./Subscriptions";
import { socialMediaSchema } from "./SocialMedia";

export interface IProviderProfile extends IAccount {
  providerName: string;
  followers: number;
  socialMedia: object;
  location: string;
  services: string[];
  premium: object;
  unlimited: object;
}

export const providerProfileSchema: Schema = new mongoose.Schema({
  providerName: {
    type: String,
    required: true,
  },
  followers: {
    type: Number,
    default: 0,
  },
  socialMedia: socialMediaSchema,
  location: {
    type: String,
    required: true,
  },
  services: {
    type: Array,
    enum: [
      "hair",
      "nails",
      "face + body art",
      "aesthetic treatments",
      "spa treatments",
      "hair removal",
      "tanning",
      "smile transformation",
      "massage",
      "lashes",
      "brows",
    ],
    required: true,
  },
  premium: premiumSubscriptionSchema,
  unlimited: unlimitedSubscriptionSchema,
});

const ProviderProfile = mongoose.model<IProviderProfile>(
  "ProviderProfile",
  providerProfileSchema
);

export default ProviderProfile;
