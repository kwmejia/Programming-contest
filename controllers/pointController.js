import PointModel from '../models/ecologicalPointModel.js'

export const updateEcologicalPoint = async (req, res) => {

  try {
    const point = await PointModel.findById(req.body._id);
    point.edificio = req.body.edificio;
    point.piso = req.body.piso;
    point.organico = req.body.organico;
    point.aprovechable = req.body.aprovechable;
    point.noAprovechable = req.body.noAprovechable;
    point.estado = getState(point);
    const pointSave = point.save();
    res.json(pointSave);
  } catch (e) {
    res.status(403).json('Eco point not found');
  }

}


export const getEcologicalPoint = async (req, res) => {

  try {
    const points = await PointModel.find();
    res.json(points);
  } catch (error) {
    res.status(404).json('Eco points not found');
  }

}

// Helper State
const getState = (point) => {

  const { organico, aprovechable, noAprovechable } = point;
  let state;
  const average = ((Number(organico) + Number(aprovechable) + Number(noAprovechable)) * 100) / 1500;
  (average > 60) ? state = 'limpio' : state = 'contaminado';
  return state;

}
