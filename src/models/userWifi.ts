import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from './User';
import { WiFiPlan } from './WifiPlans';

export interface UserWiFi extends Document {
  user: IUser['_id'];
  wifiPlan: WiFiPlan['_id'];
  startTime: Date;
  endTime: Date;
}

const userWiFiSchema: Schema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  wifiPlan: { type: Schema.Types.ObjectId, ref: 'WiFiPlan', required: true },
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
});

export default mongoose.model<UserWiFi>('UserWiFi', userWiFiSchema);
