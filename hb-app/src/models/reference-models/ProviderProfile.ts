import { IAccount } from "../user-models/Account";
import { Schema } from "mongoose";
import mongoose from "mongoose";
import {
  premiumSubscriptionSchema,
  unlimitedSubscriptionSchema,
} from "./Subscriptions";
import { socialMediaSchema } from "./SocialMedia";
import { IService, serviceSchema } from "./Service";

export interface IProviderProfile extends IAccount {
  providerName: string;
  profileImage?: string;
  followers: number;
  socialMedia?: object;
  location: string;
  serviceCategory: string[];
  services: IService[];
  premium: object;
  unlimited: object;
}

export const providerProfileSchema: Schema = new mongoose.Schema({
  providerName: {
    type: String,
    required: true,
  },
  profileImage: {
    type: String,
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
  serviceCategory: {
    type: Array,
    enum: [
      "hair stylist",
      "barber",
      "makeup artist",
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
  services: serviceSchema,
  premium: premiumSubscriptionSchema,
  unlimited: unlimitedSubscriptionSchema,
});

const ProviderProfile = mongoose.model<IProviderProfile>(
  "ProviderProfile",
  providerProfileSchema
);

export default ProviderProfile;
