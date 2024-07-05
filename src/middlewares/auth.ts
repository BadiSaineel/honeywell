import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

interface AuthRequest extends Request {
  user?: any;
}

export const auth = (req: AuthRequest, res: Response, next: NextFunction) => {
    console.log('Request Headers:', req.headers);

  const token = req.header('authorization');
  console.log(token);

  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
      console.log("reached here", process.env.JWT_SECRET);
    const decoded : any= jwt.verify(token, process.env.JWT_SECRET!);
    console.log("decoded", decoded);
    req.user = decoded.user;
    console.log("user",decoded.user);
    next();
  } catch (err) {
      console.log(err);
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
