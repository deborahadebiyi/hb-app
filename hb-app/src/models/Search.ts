import mongoose from "mongoose";
import { Document, Schema } from "mongoose";

export interface ISearch extends Document {
  query?: string;
  searchParams?: string[];
  timestamp: Date;
}

export const searchSchema: Schema = new mongoose.Schema({
  query: {
    type: String,
  },
  searchParams: {
    type: Array,
    enum: ["location", "price", "category"],
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Search = mongoose.model<ISearch>("Search", searchSchema);

export default Search;
