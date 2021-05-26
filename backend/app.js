require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookie = require('cookie-parser')
const Fawn = require("fawn");

//require component
const authRoutes = require('./routes/authRoutes')


//set up server
const app = express();
const port = 3012;
app.use(express.json()); // for data json
app.use(express.urlencoded({extended:false})); // for  data http
Fawn.init(mongoose)
app.use(cookie());
app.use(cors({  origin: 'http://localhost:3000', credentials: true }));



//connect to mongodb
mongoose.connect(process.env.DATABAS,{useUnifiedTopology: true ,useNewUrlParser: true })
.then(()=> console.log('server connect'))
.catch(()=> console.log('err server'))



//Router
app.use('/api',authRoutes);

app.listen(port, ()=>console.log('http://localhost:'+port));

