const createError = require('http-errors'); 
const DragonConstants = require('../../constants/DragonConstants');
const HttpConstants = require('../../constants/http');
function validationParams(req, res, next) {
    var { name, type, history, imageURL } = req.body;
    const typeImage = imageURL.substr(-3).toUpperCase();

    if ((typeImage != 'PNG' && typeImage != 'JPG') || imageURL.length < 20) {
        return res.status(HttpConstants.BadRequest).json({message:DragonConstants.InvalidImage});
    }
    if (!name || name.trim() == '' || !type || type.trim() == '' || !history || history.trim() == '') {
        return res.status(HttpConstants.BadRequest).json({message: DragonConstants.RequiredFields});
    }
    next();
}

module.exports = validationParams;