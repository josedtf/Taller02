const express = require('express');
const app = express();
const infoRoute = require('./routes/info');
const visualRoute = require('./routes/visual');

const PORT = process.env.PORT || 3000;

app.use('/info', infoRoute);
app.use('/visual', visualRoute);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
