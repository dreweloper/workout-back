const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connection = require('./helpers/mongodbConnection');

// Port config
const app = express();
const port = process.env.PORT | 3000;

// MongoDB connection
connection();

// Cors middleware
app.use(cors());

// Parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
// Parse application/json
app.use(express.json());

// Routes
app.use('/api/v1', require('./routers/apiRouter'));


app.listen(port, () => console.log(`Servidor a la escucha del puerto ${port}`));