import express, { Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();

app.use(cookieParser());

app.use(cors());

app.get('/', async (_request: Request, response: Response) => {
  response.json('Hello World');
});

app.listen(3000);
