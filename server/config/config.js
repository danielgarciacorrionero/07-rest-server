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

//================================
//Expiracion token
//================================
// 30 dias
process.env.TOKEN_EXPIRATION = 60 * 60 * 24 * 30

//================================
//Seed autenticaio token
//================================
process.env.TOKEN_SEED = process.env.TOKEN_SEED || 'este-es-el-seed-local'