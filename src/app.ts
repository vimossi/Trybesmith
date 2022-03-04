import express from 'express';
import dotenv from 'dotenv';
import users from './Routes/users';
import login from './Routes/login';

dotenv.config();

const app = express();

app.use(express.json());

app.use('/users', users);
app.use('/login', login);

export default app;
