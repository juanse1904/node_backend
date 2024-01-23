const express = require('express');
const router = express.Router();
const users = require('../mockData/users');

router.get('/', (req,res)=> {
  res.json(users);
});

router.post('/', (req,res)=> {
  const body = req.body;
  res.status(201).json({
    message: "created",
    data: body,
  });
});

router.patch('/:id', (req,res)=> {
  const id = req.params;
  const body = req.body;
  res.json({
    message: "update",
    data: body,
    id,
  });
});

module.exports = router;
