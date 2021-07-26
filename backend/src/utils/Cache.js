const redis = require('redis');
const { promisifyAll } = require('bluebird');

promisifyAll(redis);

class Cache{
    
    client = redis.createClient(process.env.REDIS_URL);

    get(key){
        return this.client.getAsync(key);
    }
    set(key, data){
        return this.client.setAsync(key, data);
    }
    setExpire(key, data, ttl){
        return this.client.setAsync(key, data, 'EX', ttl);
    }
    delete(key){
        return this.client.del(key);
    }
    deleteAll(){
        this.client.flushall();
    }

}

module.exports = new Cache();