import express from 'express';
import * as UserWiFiController from '../controllers/userWifiController';

const router = express.Router();

// POST associate user with a WiFi plan
router.post('/user-wifi', UserWiFiController.addUserToWiFiPlan);

export default router;
