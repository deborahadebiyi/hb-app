import mongoose from "mongoose";
import { Document, Schema } from "mongoose";
import { v4 as uuidv4 } from "uuid";

export interface IPremium extends Document {
  subscriptionId: string;
  providerId: string;
  isPremium: boolean;
  premiumStartDate: Date;
  premiumEndDate: Date;
}

export interface IUnlimited extends Document {
  subscriptionId: string;
  spId: string;
  isUnlimited: boolean;
  unlimitedStartDate: Date;
  unlimitedEndDate: Date;
}

export const premiumSubscriptionSchema: Schema = new mongoose.Schema({
  subscriptionId: {
    type: String,
    required: true,
    unique: true,
    default: uuidv4(),
  },
  providerId: {
    type: String,
    ref: "ServiceProvider",
  },
  isPremium: {
    type: Boolean,
  },
  premiumStartDate: {
    type: Date,
  },
  premiumEndDate: {
    type: Date,
  },
});

export const unlimitedSubscriptionSchema: Schema = new mongoose.Schema({
  subscriptionId: {
    type: String,
    required: true,
    unique: true,
    default: uuidv4(),
  },
  spId: {
    type: String,
    ref: "ServiceProvider",
  },
  isUnlimited: {
    type: Boolean,
  },
  unlimitedStartDate: {
    type: Date,
  },
  unlimitedEndDate: {
    type: Date,
  },
});

const PremiumSubscription = mongoose.model<IPremium>(
  "PremiumSubscription",
  premiumSubscriptionSchema
);

const UnlimitedSubscription = mongoose.model<IUnlimited>(
  "UnlimitedSubscription",
  unlimitedSubscriptionSchema
);

module.exports = {
  PremiumSubscription,
  UnlimitedSubscription,
};
