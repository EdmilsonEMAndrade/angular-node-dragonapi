require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

const dragonRoutes = require('./routes/Dragons');

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology:true});

const db = mongoose.connection;

db.on('error', (err)=>console.log(err));
db.once('open',()=>console.log( 'Database Connected'));

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

app.use('/dragons', dragonRoutes);
app.listen(process.env.DATABASE_PORT || 3000,()=> console.log(`Server running! Port: ${process.env.DATABASE_PORT || 3000}`));
