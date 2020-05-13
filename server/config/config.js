//================================
//Puerto
//================================
process.env.PORT = process.env.PORT || 3000;

//================================
//Entorno
//================================
process.env.NODE_ENV = process.env.NODE_ENV || 'local'

//================================
//Base de datos
//================================
process.env.MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/Cafe'