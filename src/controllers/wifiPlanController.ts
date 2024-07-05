import { Request, Response } from 'express';
import * as WiFiPlanService from '../services/wifiPlanService';

export const getAllWiFiPlans = async (req: Request, res: Response): Promise<void> => {
  try {
    const plans = await WiFiPlanService.getAllWiFiPlans();
    res.json(plans);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const addWiFiPlan = async (req: Request, res: Response): Promise<void> => {
  const { name, description, price, duration } = req.body;
  const planData: any = { name, description, price, duration };

  try {
    const newPlan = await WiFiPlanService.addWiFiPlan(planData);
    res.status(201).json(newPlan);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
