async function isImage(req, res, next){
    const {imageURL} = req.body;
    const typeImage = imageURL.substr(-3).toUpperCase();
    try{
        if(typeImage != 'PNG' && typeImage != 'JPG'){
            return res.status(400).json({message:'Image must be png or jpg type.'});
        }
        next();
        
    }catch(error){
        return res.status(500).json({message:err.message});
    }
    
}


module.exports = isImage;