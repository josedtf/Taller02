const express = require('express');
const router = express.Router();
const pokeneas = require('../pokeneas/data');
const getContainerId = require('../utils/containerId');

router.get('/', (req, res) => {
  const random = pokeneas[Math.floor(Math.random() * pokeneas.length)];
  res.json({
    id: random.id,
    nombre: random.nombre,
    altura: random.altura,
    habilidad: random.habilidad,
    contenedor: getContainerId()
  });
});

module.exports = router;
