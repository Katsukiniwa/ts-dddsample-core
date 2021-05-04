import express, { Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();

app.use(cookieParser());

app.use(cors());

app.get('/', async (request: Request, response: Response) => {
  try {
    response.json('Hello World');
  } catch (error) {
    throw new Error(error);
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening on 3000 port!');
});
