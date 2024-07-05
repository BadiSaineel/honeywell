import UserWiFi, { UserWiFi as UserWiFiType } from '../models/userWifi';

export const addUserToWiFiPlan = async (userId: string, planId: string, startTime: Date, endTime: Date): Promise<UserWiFiType> => {
  try {
    const newUserWiFi = new UserWiFi({
      user: userId,
      wifiPlan: planId,
      startTime,
      endTime,
    });
    const savedUserWiFi = await newUserWiFi.save();
    return savedUserWiFi;
  } catch (error) {
    throw new Error(`Failed to add user to WiFi plan: ${error}`);
  }
};
