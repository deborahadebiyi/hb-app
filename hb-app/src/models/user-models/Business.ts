import mongoose from "mongoose";
import { Schema } from "mongoose";
import { addressSchema, IAddress } from "../reference-models/Address";
import {
  IOpeningTimes,
  openingTimesSchema,
} from "../reference-models/OpeningTimes";
import ProviderProfile, {
  IProviderProfile,
} from "../reference-models/ProviderProfile";

export interface IBusiness extends IProviderProfile {
  website?: string;
  address?: IAddress;
  openingTimes?: IOpeningTimes;
}

export const businessSchema: Schema = new mongoose.Schema({
  website: {
    type: String,
  },
  address: {
    type: addressSchema,
  },
  openingTimes: {
    type: openingTimesSchema,
  },
});

export const Business = ProviderProfile.discriminator<IBusiness>(
  "Business",
  businessSchema
);
