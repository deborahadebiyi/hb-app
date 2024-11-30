import mongoose from "mongoose";
import { Schema } from "mongoose";

import ProviderProfile, {
  IProviderProfile,
} from "../reference-models/ProviderProfile";

export interface IServiceProvider extends IProviderProfile {
  extraOfferings?: string[];
}

export const serviceproviderSchema: Schema = new mongoose.Schema({
  extraOfferings: {
    type: Array,
    enum: [
      "neurodiverse friendly",
      "child friendly",
      "pet friendly",
      "accessible",
    ],
  },
});

export const ServiceProvider = ProviderProfile.discriminator<IServiceProvider>(
  "ServiceProvider",
  serviceproviderSchema
);
