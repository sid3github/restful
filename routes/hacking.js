const express = require('express');
const router = express.Router();
const Data = require('../models/students');


router.get('/student',function(req,res){
    Data.find({},function(err,data){
        if(err){
            throw err;
        }
        res.json(data);
    });
});
router.post('/student',function(req,res){
 //creating new instance / new object of that particular class or variable   
    let user = new Data;
    user.name = req.body.name;
    user.rating = req.body.rating;

    user.save(function(err,user){
        if(err){
            throw err;
        }
        res.json(user);
    });
});
router.put('/student/:id',function(req,res){
    Data.findById(req.params.id,function(err,user){
        if(err){
            throw err;
        }
        user.name = req.body.name;
        user.rating = req.body.rating;

        user.save(function(err,user){
            if(err){
                throw err;
            }
            res.json(user);
        });
    });
});
router.delete('/student/:id',function(req,res){
    Data.findByIdAndRemove(req.params.id,function(err,user){
        if(err){
            throw err;
        }
        res.json(user);
    });
});

module.exports = router;













