const Dragon = require('../../models/Dragon');

class DragonController {
    async index(req, res) {
        const { limit, page } = req.query;
        var nDragons = 3;
        var pageView = 0;
        if(limit){
            nDragons = parseInt(limit);
        }
        if(page){
            pageView = parseInt(page);
        }

        try{
            const dragons = await Dragon.find()
                                        .limit( nDragons )
                                        .skip( pageView > 0 ? ( ( pageView - 1 ) * nDragons ) : 0 );
            if(dragons.length == 0){
                return res.status(400).json({message:'Page not found'});
            }
            return res.json(dragons);
        }catch(err){
            return res.status(400).json({message: err.message});
        }
    }
    show(req, res){
        res.json(res.dragon);    
    }

    async store(req, res) {
        const { name, type, history, imageURL } = req.body;

        const dragon = new Dragon({
            name: name,
            type: type,
            history: history,
            imageURL: imageURL
        });
        console.log(dragon);
        try {
            const newDragon = await dragon.save();
            return res.status(201).json(newDragon);
        } catch (err) {
            return res.status(400).json({ message: err.message });
        }
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
            res.status(201).json(updateDragon);
        }catch(err){
            res.status(400).json({message: err.message});
        }
       
    }
    async delete(req, res){
        try{
            await res.dragon.remove();
            res.status(204).json({message:`Dragon was deleted`});
        }catch(err){
            res.status(400).json({message: err.message});
        }
    }

}

module.exports = new DragonController();