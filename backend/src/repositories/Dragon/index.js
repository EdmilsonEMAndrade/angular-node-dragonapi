const Dragon = require('../../models/Dragon');
const createError = require('http-errors'); 
const DragonConstants = require('../../constants/DragonConstants');
const HttpConstants = require('../../constants/http');
class DragonRepository {
  async getAll(limit, page) {
    const dragons = await Dragon.find()
                                        .limit( limit )
                                        .skip( page > 0 ? ( ( page - 1 ) * limit ) : 0 );
    
    return dragons;
  }  

  async create(name, type, history, imageURL) {    
    const dragon = await Dragon.create({name, type, history, imageURL});
    return dragon;
  }
  
}

module.exports = new DragonRepository();