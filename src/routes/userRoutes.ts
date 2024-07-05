import express from 'express';
import { registerUser, loginUser, getUser } from '../controllers/userController';
import { auth } from '../middlewares/auth';

const router = express.Router();

// @route    POST api/users/register
// @desc     Register user
router.post('/register', registerUser);

// @route    POST api/users/login
// @desc     Authenticate user & get token
router.post('/login', loginUser);

// @route    GET api/users
// @desc     Get user data
router.get('/', auth, getUser);

export default router;
