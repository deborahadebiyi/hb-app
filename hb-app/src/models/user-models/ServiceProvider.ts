import mongoose from "mongoose";
import { Schema } from "mongoose";

import ProviderProfile, {
  IProviderProfile,
} from "../reference-models/ProviderProfile";
import { IService, serviceSchema } from "../reference-models/Service";

export interface IServiceProvider extends IProviderProfile {
  isSubscribed: boolean;
  subscriptionType: string;
  isPaused: boolean; // in the case of payment failurexs
  extraOfferings?: string[];
  catersTo?: string[];
  headerImage?: string;
  serviceList: IService[];
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
    serviceList: {
      type: [serviceSchema],
      default: [],
    },
  });

export const ServiceProvider = ProviderProfile.discriminator<IServiceProvider>(
  "ServiceProvider",
  serviceproviderSchema
);
