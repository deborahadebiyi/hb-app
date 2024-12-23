import { Schema, Document } from "mongoose";
import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

export interface IService extends Document {
  serviceName: string;
  serviceDescription?: string;
  duration?: string;
  price: number;
  image?: string;
}

export const serviceSchema: Schema = new mongoose.Schema<IService>({
  serviceName: {
    type: String,
    required: true,
  },
  serviceDescription: {
    type: String,
    maxLength: 180,
  },
  duration: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
  },
});

const Service = mongoose.model<IService>("Service", serviceSchema);

export default Service;
