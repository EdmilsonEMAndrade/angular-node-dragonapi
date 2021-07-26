const Cache = require('../../utils/Cache');
const DragonRepository = require('../../repositories/Dragon');

class DragonService {
    async getAll(limit, page) {
        const cache = await Cache.get(`dragons-${page}`);

        if (cache) {
            return JSON.parse(cache);
        }

        const dragons = await DragonRepository.getAll(parseInt(limit), parseInt(page));
        await Cache.set(`dragons-${page}`, JSON.stringify(dragons));

        return dragons;
    }

    async create(name, type, history, imageURL) {
        const dragon = DragonRepository.create(name, type, history, imageURL);
        return dragon;
    }

}
module.exports = new DragonService();