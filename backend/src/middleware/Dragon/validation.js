async function validation(req, res, next){
    var {name, type, history, imageURL} = await req.body;
    const typeImage = imageURL.substr(-3).toUpperCase();

    try{
        if((typeImage != 'PNG' && typeImage != 'JPG') || imageURL.length < 20 ){
            return res.status(400).json({message:'Link da imagem ou tipo está errado \n A imagem deve ser do tipo png ou jpg.'});
        }
        if(!name || name.trim() == '' || !type || type.trim() == '' || !history || history.trim() == ''){
            return res.status(400).json({message:'Um ou mais campos obrigatórios não preencidos.'});
        }
        next();
        
    }catch(error){
        return res.status(500).json({message:err.message});
    }
    
}


module.exports = validation;