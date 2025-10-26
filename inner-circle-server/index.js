import express from 'express';
import cors from "cors";
import 'dotenv/config';
import cookieParser from "cookie-parser";

import connectDB from './config/mongodb.js'; 
import authRouter from './routes/authRoutes.js' 
import userRouter from './routes/userRoutes.js';

const app = express();
const port = process.env.PORT || 4000
connectDB();

app.use(express.json());
// parse application/x-www-form-urlencoded (for HTML form POSTs)
app.use(express.urlencoded({ extended: true }));
// accept text bodies (some clients send JSON as text/plain); attempt to parse JSON
app.use(express.text({ type: 'text/*' }));
app.use((req, res, next) => {
    if (req.is && req.is('text/*') && typeof req.body === 'string') {
        try {
            req.body = JSON.parse(req.body);
        } catch (err) {
            // ignore parse error; leave body as string
        }
    }
    next();
});
app.use(cookieParser());
app.use(cors({credentials: true}));

//API Endpoints
app.get('/', ( req, res ) => res.send("API working fine"));
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);
app.listen(port, () => {
    console.log(`Server running on PORT:${port}`);
});