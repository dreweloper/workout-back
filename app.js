const express = require('express');

const app = express();
const port = process.env.PORT | 3000;

app.use('/api/v1', require('./routers/apiRouter'));

app.listen(port, () => console.log(`Servidor a la escucha del puerto ${port}`));