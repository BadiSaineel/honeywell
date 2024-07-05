import express from 'express';
import * as WiFiPlanController from '../controllers/wifiPlanController';

const router = express.Router();

// GET all WiFi plans
router.get('/wifi-plans', WiFiPlanController.getAllWiFiPlans);

// POST add a new WiFi plan
router.post('/wifi-plans', WiFiPlanController.addWiFiPlan);

export default router;
