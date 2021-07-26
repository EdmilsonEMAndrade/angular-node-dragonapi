const mongoose = require('mongoose');

const dragonSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    history:{
        type:String,
        required:true
    },
    imageURL:{
        type:String,
        required:true
    },
    createdAt:{
        type: Date,
        default: Date.now()
    },
    updateAt:{
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Dragon', dragonSchema);