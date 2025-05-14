const express = require('express');
const router = express.Router();
const pokeneas = require('../pokeneas/data');
const getContainerId = require('../utils/containerId');

router.get('/', (req, res) => {
  const random = pokeneas[Math.floor(Math.random() * pokeneas.length)];
  const html = `
    <html>
      <head>
        <title>Pokenea Visual</title>
      </head>
      <body style="text-align: center; font-family: sans-serif;">
        <h1>${random.nombre}</h1>
        <img src="${random.imagen}" alt="${random.nombre}" style="width: 300px;"/>
        <p><em>"${random.frase}"</em></p>
        <p>ID del Contenedor: ${getContainerId()}</p>
      </body>
    </html>
  `;
  res.send(html);
});

module.exports = router;
