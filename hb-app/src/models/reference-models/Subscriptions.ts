import mongoose from "mongoose";
import { Document, Schema } from "mongoose";

export interface IPremium extends Document {
  subId: string;
  spId: string;
  isPremium: boolean;
  premiumStartDate: Date;
  premiumEndDate: Date;
}

export interface IUnlimited extends Document {
  subId: string;
  spId: string;
  isUnlimited: boolean;
  unlimitedStartDate: Date;
  unlimitedEndDate: Date;
}

export const premiumSubscriptionSchema: Schema = new mongoose.Schema({
  subId: {
    type: String,
    required: true,
    unique: true,
  },
  spId: {
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
  subId: {
    type: String,
    required: true,
    unique: true,
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
