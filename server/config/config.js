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
if (process.env.NODE_ENV === 'local') {
    process.env.URLDB = 'mongodb://localhost:27017/Cafe';
} else {
    process.env.URLDB = 'mongodb+srv://admin:A94wpxPSHrjKErB@cluster0-7jjqt.mongodb.net/cafe';
}