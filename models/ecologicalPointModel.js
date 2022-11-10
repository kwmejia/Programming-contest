import mongoose from "mongoose";

const ecologicalPointSchema = mongoose.Schema({
  edificio: {
    type: String,
    required: true
  },
  piso: {
    type: String,
    required: true
  },
  aprovechable: {
    type: Number,
    required: true
  },
  organico: {
    type: Number,
    required: true
  },
  noAprovechable: {
    type: Number,
    required: true
  },
  estado: {
    type: String,
    required: false
  }

});

const EcologicalPointModel = mongoose.model('puntos', ecologicalPointSchema);

export default EcologicalPointModel;