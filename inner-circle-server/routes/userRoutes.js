import express from 'express';
import userAuth from '../middleware/userAuth.js';
import { getUserData } from '../controllers/userController.js';

const userRouter = express.Router();

// Accept both GET and POST so clients can use either method
userRouter.get('/data', userAuth, getUserData);

export default userRouter;