const express = require ('express');
const path = require ('path');
const cors = require ('cors');
const morgan = require('morgan')
const app = express();

app.use(express.json())

//Leer rutas
const routes = require('./backend/routes/routes.js');
app.use('/api/',routes)

app.use(morgan('dev'));

app.listen(3000,()=>{
  console.log('server started')
})