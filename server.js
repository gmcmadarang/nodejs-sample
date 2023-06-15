import { createServer } from 'http';
import app from './index.js';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const port = process.env.APP_PORT;

const server = createServer(app);

server.listen(port);

app.use(cors({
    origin: '*'
}));