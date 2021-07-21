const Dragon = require('../../models/Dragon');

async function getDragon(req, res, next){
    try{
        dragon = await Dragon.findById(req.params.id);
        if(dragon == null){
            return res.status(404).json({message:`Dragon not found!`});
        }

    }catch(err){
        return res.status(500).json({message:err.message});
    }

    res.dragon = dragon;
    next();
}


module.exports = getDragon;