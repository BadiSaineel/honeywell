import express from 'express';
import connectDB from './config/db'; // Import your database connection function
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes';
import wifiPlanRoutes from './routes/wifiPlanRoutes';
import userWiFiRoutes from './routes/userWifiRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/wifi-plans', wifiPlanRoutes);
app.use('/api/user-wifi', userWiFiRoutes);

// Connect to MongoDB
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  });
