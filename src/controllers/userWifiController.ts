import { Request, Response } from 'express';
import * as UserWiFiService from '../services/userWifiService';

export const addUserToWiFiPlan = async (req: Request, res: Response): Promise<void> => {
  const { userId, planId, startTime, endTime } = req.body;

  try {
    const newUserWiFi = await UserWiFiService.addUserToWiFiPlan(userId, planId, startTime, endTime);
    res.status(201).json(newUserWiFi);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
