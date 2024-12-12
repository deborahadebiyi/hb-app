import mongoose from "mongoose";
import { Document, Schema } from "mongoose";

export interface IAuditLog {
  accountId: string;
  eventName: string;
  timestamp: Date;
}

export type TAuditLog = IAuditLog & Document;

const auditLogSchema: Schema = new mongoose.Schema({
  accountId: {
    type: String,
    ref: "Account",
    required: true,
  },
  eventName: {
    type: String,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const AuditLog = mongoose.model<TAuditLog>("AuditLog", auditLogSchema);

export default AuditLog;

// import mongoose from "mongoose";
// import { Document, Schema } from "mongoose";

// export interface IAuditLog extends Document {
//   accountId: string;
//   eventName: string;
//   timestamp: Date;
// }

// const auditLogSchema: Schema = new mongoose.Schema({
//   accountId: {
//     type: String,
//     ref: "Account",
//     required: true,
//   },
//   eventName: {
//     type: String,
//   },
//   timestamp: {
//     type: Date,
//     default: Date.now,
//   },
// });

// const AuditLog = mongoose.model<IAuditLog>("AuditLog", auditLogSchema);

// export default AuditLog;
