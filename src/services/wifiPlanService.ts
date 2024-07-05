import WiFiPlan, { WiFiPlan as WiFiPlanType } from '../models/WifiPlans';

export const getAllWiFiPlans = async (): Promise<WiFiPlanType[]> => {
  try {
    const plans = await WiFiPlan.find().exec();
    return plans;
  } catch (error) {
    throw new Error(`Failed to fetch WiFi plans: ${error}`);
  }
};

export const addWiFiPlan = async (planData: WiFiPlanType): Promise<WiFiPlanType> => {
  try {
    const newPlan = new WiFiPlan(planData);
    const savedPlan = await newPlan.save();
    return savedPlan;
  } catch (error) {
    throw new Error(`Failed to add WiFi plan: ${error}`);
  }
};
