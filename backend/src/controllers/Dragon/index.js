const DragonService = require('../../service/Dragon');
const Dragon = require('../../models/Dragon');
const HttpConstants = require('../../constants/http');
const Cache = require('../../utils/Cache');

class DragonController {
    async index(req, res) {
        const { limit, page } = req.query;
        const dragons = await DragonService.getAll(limit, page);
        return res.status(HttpConstants.OK).json(dragons);
    }

    async show(req, res){        
        return res.status(HttpConstants.OK).json(res.dragon);    
    }

    async store(req, res) {
        const { name, type, history, imageURL } = req.body;
        const dragon = await DragonService.create(name, type, history, imageURL);
        Cache.deleteAll();
        return res.status(HttpConstants.Created).json(dragon);
    }

    async update(req, res) {
        const {name, type, history, imageURL } = req.body;
        
        res.dragon.name = name;
        res.dragon.type = type;
        res.dragon.history = history;
        res.dragon.imageURL = imageURL;
        res.dragon.updateAt = Date.now();
    
        try{
            const updateDragon = await res.dragon.save();
            Cache.deleteAll();
            return res.status(HttpConstants.OK).json(updateDragon);
        }catch(err){
            return res.status(HttpConstants.BadRequest).json({message: err.message});
        }
       
    }
    async delete(req, res){
        try{
            await res.dragon.remove();
            Cache.deleteAll();
            return res.status(HttpConstants.NoContent).json({message:`Dragon was deleted`});
        }catch(err){
            return res.status(HttpConstants.BadRequest).json({message: err.message});
        }
    }

}

module.exports = new DragonController();