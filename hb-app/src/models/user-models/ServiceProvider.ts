import mongoose from "mongoose";
import { Schema } from "mongoose";

import ProviderProfile, {
  IProviderProfile,
} from "../reference-models/ProviderProfile";

export interface IServiceProvider extends IProviderProfile {
  isSubscribed: boolean;
  subscriptionType: string;
  isPaused: boolean; // in the case of payment failures
  catersTo?: string[];
  headerImage?: string;
  bookingLink: string;
}

export const serviceproviderSchema: Schema =
  new mongoose.Schema<IServiceProvider>({
    isSubscribed: {
      type: Boolean,
      default: false,
    },
    subscriptionType: {
      type: String,
      enum: [
        "premium",
        "premium-free-trial",
        "unlimited",
        "unlimited-free-trial",
      ],
    },
    isPaused: {
      type: Boolean,
      default: false,
    },
    catersTo: {
      type: Array,
      enum: [
        "neurodiverse-friendly",
        "child-friendly",
        "pet-friendly",
        "accessible",
        "mobile",
        "hijabi-friendly",
        "hard-of-hearing",
      ],
    },
    headerImage: {
      type: String,
    },
    bookingLink: {
      type: String,
    },
  });

export const ServiceProvider = ProviderProfile.discriminator<IServiceProvider>(
  "ServiceProvider",
  serviceproviderSchema
);
