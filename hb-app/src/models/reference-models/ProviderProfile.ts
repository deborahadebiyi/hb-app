import { IAccount } from "../user-models/Account";
import { Schema } from "mongoose";
import mongoose from "mongoose";
import {
  IPremium,
  IUnlimited,
  premiumSubscriptionSchema,
  unlimitedSubscriptionSchema,
} from "./Subscriptions";
import { ISocialMedia, socialMediaSchema } from "./SocialMedia";
import { IService, serviceSchema } from "./Service";

export interface IProviderProfile extends IAccount {
  providerName: string;
  profileImage?: string;
  businessTelephoneNumber?: string;
  followers: number;
  socialMedia?: ISocialMedia;
  rating: number;
  ratingCount: number;
  location: string;
  serviceCategory: string[];
  services: IService[];
  premium: IPremium;
  unlimited: IUnlimited;
}

export const providerProfileSchema: Schema =
  new mongoose.Schema<IProviderProfile>({
    providerName: {
      type: String,
      required: true,
    },
    profileImage: {
      type: String,
    },
    businessTelephoneNumber: {
      type: String,
      unique: true,
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
    rating: {
      type: Number,
      default: 0,
    },
    ratingCount: {
      type: Number,
      default: 0,
    },
    serviceCategory: {
      type: [String],
      enum: [
        "hair stylist",
        "loctician",
        "barber",
        "makeup artist",
        "nail technician",
        "face + body art",
        "aesthetic treatments",
        "spa treatments",
        "hair removal",
        "tanning",
        "smile transformation",
        "massage",
        "lashes",
        "brows",
        "baking",
      ],
      required: true,
    },
    services: [serviceSchema],
    premium: premiumSubscriptionSchema,
    unlimited: unlimitedSubscriptionSchema,
  });

const ProviderProfile = mongoose.model<IProviderProfile>(
  "ProviderProfile",
  providerProfileSchema
);

export default ProviderProfile;
