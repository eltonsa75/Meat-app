"use strict";
exports.__esModule = true;
exports.handleAuthentication = function (req, resp) {
    var user = req.body;
    if (isValid(user)) {
    }
    else {
        resp.status(403).json({ message: 'Dados inválido.' });
    }
};
function isValid(user) {
    return false;
}
