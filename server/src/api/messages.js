const express = require('express');
const Joi = require('joi');

const schema = Joi.object().keys({
  name: Joi.string().alphanum().min(1).max(100).required(),
  message: Joi.string().alphanum().min(1).max(500).required(),
  latitude: Joi.number().min(-90).max(90).required(),
  longitude: Joi.number().min(-180).max(180).required(),
  date: Joi.date()
});

const router = express.Router();

router.get('/', (req, res) => {
  res.json(['Maor']);
});

router.post('/', (req, res) => {
  res.json(['Maor']);
});

module.exports = router;
