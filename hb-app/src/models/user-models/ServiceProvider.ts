import mongoose from "mongoose";
import { Schema } from "mongoose";

import ProviderProfile, {
  IProviderProfile,
} from "../reference-models/ProviderProfile";

export interface IServiceProvider extends IProviderProfile {
  extraOfferings?: string[];
  catersTo?: string[];
}

export const serviceproviderSchema: Schema = new mongoose.Schema({
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
});

export const ServiceProvider = ProviderProfile.discriminator<IServiceProvider>(
  "ServiceProvider",
  serviceproviderSchema
);
