import { createServer } from 'http';
import app from './index.js';
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.APP_PORT;

const server = createServer(app);

server.listen(port);