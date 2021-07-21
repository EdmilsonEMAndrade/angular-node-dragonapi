require('dotenv').config();
const port = 3000;
const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology:true});

const db = mongoose.connection;
db.on('error', (err)=>console.log(err));
db.once('open',()=>console.log( 'Database Connected'));

app.use(express.json());

const dragonRoutes = require('./routes/Dragons');
app.use('/dragons', dragonRoutes);

app.listen(port,()=> console.log(`Server running! Port: ${port}`));
