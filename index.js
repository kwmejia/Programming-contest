import express from 'express';
import cors from 'cors';
import routesPoint from './routes/point.routes.js';
import ConnectMongo from './db/db.js';

const server = express();

ConnectMongo();

server.use(express.json())
  .use(cors())
  .use('/uts', routesPoint);

server.listen(5000, () => {
  console.log('Backend running on the port 5000');
});