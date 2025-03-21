import mongoose from "mongoose";
import { Document, Schema } from "mongoose";
import { v4 as uuidv4 } from "uuid";

export interface IPremium extends Document {
  subscriptionId: string;
  stripeId: string;
  providerId: string;
  isPremium: boolean;
  premiumStartDate: Date;
  premiumRenewalDate: Date;
  premiumEndDate: Date;
  premiumfreeTrialStartDate: Date;
  premiumfreeTrialEndDate: Date;
  premiumfreeTrialClaimed: boolean;
}

export interface IUnlimited extends Document {
  subscriptionId: string;
  stripeId: string;
  providerId: string;
  isUnlimited: boolean;
  unlimitedStartDate: Date;
  unlimitedRenewalDate: Date;
  unlimitedEndDate: Date;
  unlimitedfreeTrialStartDate: Date;
  unlimitedfreeTrialEndDate: Date;
  unlimitedfreeTrialClaimed: boolean;
}

export const premiumSubscriptionSchema: Schema = new mongoose.Schema<IPremium>({
  subscriptionId: {
    type: String,
    required: true,
    unique: true,
    default: uuidv4(),
  },
  stripeId: {
    type: String,
    required: true,
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
  premiumRenewalDate: {
    type: Date,
  },
  premiumEndDate: {
    type: Date,
  },
  premiumfreeTrialStartDate: {
    type: Date,
  },
  premiumfreeTrialEndDate: {
    type: Date,
  },
  premiumfreeTrialClaimed: {
    type: Boolean,
    default: false,
  },
});

export const unlimitedSubscriptionSchema: Schema =
  new mongoose.Schema<IUnlimited>({
    subscriptionId: {
      type: String,
      required: true,
      unique: true,
      default: uuidv4(),
    },
    stripeId: {
      type: String,
      required: true,
    },
    providerId: {
      type: String,
      ref: "ServiceProvider",
    },
    isUnlimited: {
      type: Boolean,
    },
    unlimitedStartDate: {
      type: Date,
    },
    unlimitedRenewalDate: {
      type: Date,
    },
    unlimitedEndDate: {
      type: Date,
    },
    unlimitedfreeTrialStartDate: {
      type: Date,
    },
    unlimitedfreeTrialEndDate: {
      type: Date,
    },
    unlimitedfreeTrialClaimed: {
      type: Boolean,
      default: false,
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
