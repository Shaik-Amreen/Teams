const express = require('express')
var router = express.Router()
var {team} = require('../models/Rolls')
let result=[];
router.get('/', (req, res) => {
  
  team.find((err,docs)=>{
    if(!err){
      result=[];
    result.push(...docs);
     res.send(result)
    }
 else console.log('Error while retrieving all records : ' + JSON.stringify(err, undefined, 2))
   })
  });

module.exports = router;