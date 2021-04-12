const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
  console.log('come in ')
  res.render('index.html')
})

module.exports = router