import mongoose from "mongoose";
import { Schema } from "mongoose";

import ProviderProfile, {
  IProviderProfile,
} from "../reference-models/ProviderProfile";

export interface IServiceProvider extends IProviderProfile {
  isSubscribed: boolean;
  subscriptionType: string;
  isPaused: boolean; // in the case of payment failures
  extraOfferings?: string[];
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
    extraOfferings: {
      type: Array,
      enum: [
        "neurodiverse-friendly",
        "child-friendly",
        "pet-friendly",
        "accessible",
      ],
    },
    catersTo: {
      type: Array,
      enum: [
        "afro/natural hair",
        "type 1 hair",
        "type 2 hair",
        "type 3 hair",
        "type 4 hair",
        "grey hair",
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
