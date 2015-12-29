var express = require('express');
var router = express.Router();
var table = require('../models/Table');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Chicago Charitable Games' });
// });

router.get('/', function(req,res){
  table.find(function(err,tables){
    if(err) {
      console.log(err);
    } else {
      res.json(tables);
    }
  });
});

router.get('/:id',function(req,res){
  table.findById(req.params.id,function(err,table){
    if(err){
      console.log(err);
    } else {
      res.json(table);
    }
  });
});

router.post('/',function(req,res){
  table.create(req.body,function(err,table){
    if(err){
      console.log(err);
    } else {
      res.json(table);
    }
  });
});

router.patch('/:id',function(req,res){
  table.findByIdAndUpdate(req.params.id,req.body,function(err,table){
    if(err){
      console.log(err);
    } else {
      res.json(table);
    }
  });
});

router.put('/:id',function(req,res){
  table.findByIdAndUpdate(req.params.id,req.body,function(err,table){
    if(err){
      console.log(err);
    } else {
      res.json(table);
    }
  });
});

router.delete('/:id',function(req,res){
  table.findByIdAndRemove(req.params.id,req.body,function(err,table){
    if(err){
      console.log(err);
    } else {
      res.json(table);
    }
  });
});

module.exports = router;
