import mongoose from "mongoose";
import { Document, Schema } from "mongoose";

export interface ISettings extends Document {
  accountIdentifier: string;
  pushNotifications: boolean;
}

export const settingsSchema: Schema = new mongoose.Schema<ISettings>({
  accountIdentifier: {
    type: String,
    ref: "Account",
    required: true,
  },
  pushNotifications: {
    type: Boolean,
    default: true,
  },
});

const Settings = mongoose.model<ISettings>("Settings", settingsSchema);

export default Settings;
