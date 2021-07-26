const DragonConstants = require('../../constants/DragonConstants');
const HttpConstants = require('../../constants/http');

function validationDataList(req, res, next) {
    const { limit, page } = req.query;

    if ((!limit || !page) || (parseInt(limit) <= 0 && parseInt(page) <= 0)) {
        return res.status(HttpConstants.BadRequest()).json({message: DragonConstants.InvalidParams()});
    }
    next();
}
module.exports = validationDataList;