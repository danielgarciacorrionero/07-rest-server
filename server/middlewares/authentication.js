const jwt = require('jsonwebtoken');

//================================
//Verificar token
//================================
let verificaToken = (req, res, next) => {

    let token = req.get('Authorization');

    jwt.verify(token, process.env.TOKEN_SEED, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: "Token inválido"
                }
            });
        }

        req.usuario = decoded.usuario;
        next();

    })

};

//================================
//Verificar rol
//================================
let verificaAdminRole = (req, res, next) => {

    let rol = req.usuario.role;

    if (rol !== 'ADMIN_ROLE') {
        return res.status(403).json({
            ok: false,
            err: {
                message: "El usuario no tiene permiso para realizar esta acción"
            }
        });
    }
    next();

};

module.exports = {
    verificaToken,
    verificaAdminRole
};