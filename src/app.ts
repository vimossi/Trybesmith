import express from 'express';
import dotenv from 'dotenv';
import users from './Routes/users';

dotenv.config();

const app = express();

app.use(express.json());

app.use('/users', users);

export default app;
