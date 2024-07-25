// index.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 32767;
const db = require('./queries');

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', (request, response) => {
  response.json({ info: 'API REST de estacionamiento funcionando' });
  console.log('Servidor en funcionamiento en el puerto:', port);
});

// Ruta para obtener el número de estacionamientos disponibles en estacionamiento_1
app.get('/estacionamiento_1', async (request, response) => {
  try {
    const result = await db.executeQuery('SELECT n_estacionamiento, n_estacionamiento_vacios FROM estacionamiento_1 WHERE id_estacionamiento = 1');
    response.status(200).json(result);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
});

// Ruta para obtener el número de estacionamientos disponibles en estacionamiento_2
app.get('/estacionamiento_2', async (request, response) => {
  try {
    const result = await db.executeQuery('SELECT n_estacionamiento, n_estacionamiento_vacios FROM estacionamiento_1 WHERE id_estacionamiento = 2');
    response.status(200).json(result);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
});

// Ruta para obtener el número de estacionamientos disponibles en estacionamiento_3
app.get('/estacionamiento_3', async (request, response) => {
  try {
    const result = await db.executeQuery('SELECT n_estacionamiento, n_estacionamiento_vacios FROM estacionamiento_1 WHERE id_estacionamiento = 3');
    response.status(200).json(result);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
});

// Ruta para obtener el número de estacionamientos disponibles en estacionamiento_4
app.get('/estacionamiento_4', async (request, response) => {
  try {
    const result = await db.executeQuery('SELECT n_estacionamiento, n_estacionamiento_vacios FROM estacionamiento_1 WHERE id_estacionamiento = 4');
    response.status(200).json(result);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor en funcionamiento en el puerto: ${port}`); // Usa comillas invertidas para interpolar variables
});
