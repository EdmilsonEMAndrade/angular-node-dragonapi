const Dragon = require('../../models/Dragon');
const DragonConstants = require('../../constants/DragonConstants');
const HttpConstants = require('../../constants/http');
const Cache = require('../../utils/Cache');

async function getDragon(req, res, next) {     
   
    try {
        dragon = await Dragon.findById(req.params.id);
    } catch (err) {
        return res.status(HttpConstants.BadRequest).json({ message: DragonConstants.InvalidID });
    }
       
    res.dragon = dragon;
    next();
}


module.exports = getDragon;