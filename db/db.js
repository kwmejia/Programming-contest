import mongoose from 'mongoose';

const conectarMongo = async () => {
  try {
    const urlMongo = 'mongodb+srv://root:root@cluster0.qlqx2o1.mongodb.net/puntosUts?retryWrites=true&w=majority';
    await mongoose.connect(urlMongo, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log(`Mongo DB connected`);
  } catch (e) {
    console.log(e.message);
    process.exit(1);
  }
}

export default conectarMongo;