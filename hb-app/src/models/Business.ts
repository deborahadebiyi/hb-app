import Account, { IAccount } from "./Account";
import mongoose from "mongoose";

export interface IBusiness extends Document {
  businessName: string;
  location: string;
  socialMedia: object;
  followers: number;
  website?: string;
  address?: object;
  services: string[];
  openingTimes?: object;
}
