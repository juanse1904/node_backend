const express = require('express');
const router = express.Router();

router.get("/", (req,res) =>{
  res.json([
      {
      name: 'product 1',
      price: 5500
      },
      {
      name: 'product 2',
      price: 2300
      },
      {
      name: 'product 3',
      price: 700
      },
]);
});

//listening params in the URL
router.get('/:id', (req,res)=> {
  const {id} = req.params;
  res.json({
      name: 'product 1',
      price: 2000,
      id,
  })
});

module.exports = router;
