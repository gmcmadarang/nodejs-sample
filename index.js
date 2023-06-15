import express from 'express';

import userRoute from './routes/users.js';
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/users', userRoute);
app.use('/', userRoute);

export default app;