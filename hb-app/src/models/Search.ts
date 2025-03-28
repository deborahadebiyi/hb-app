import mongoose from "mongoose";
import { Document, Schema } from "mongoose";

export interface ISearch extends Document {
  query: string; // will need to do some sort of sanitising (zod)?
  searchParams?: string[];
  timestamp: Date;
}

export const searchSchema: Schema = new mongoose.Schema<ISearch>({
  query: {
    type: String,
  },
  searchParams: {
    type: Array,
    enum: ["location", "price", "category", "provider"],
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Search = mongoose.model<ISearch>("Search", searchSchema);

export default Search;

/**
 * Read the NOTE under Create an Index
 * https://www.mongodb.com/docs/atlas/atlas-ui/indexes/
 */
