import express from 'express';
import {
  getEcologicalPoint,
  updateEcologicalPoint
} from '../controllers/pointController.js';

const router = express.Router();


router
  .get('/point', getEcologicalPoint)
  .put('/point', updateEcologicalPoint);

export default router;