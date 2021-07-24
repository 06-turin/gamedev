import path from 'path';
import express from 'express';
import { serverRenderMiddleware } from './serverRenderMiddleware';

const app = express();

app.use(express.static(path.join(__dirname, '../dist')));

app.get(['/*'], serverRenderMiddleware);

export { app };
