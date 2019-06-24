const express = require('express');
const {MasterBot, SlaveBot} = require('../models');

const router = express.Router();

router.get('/:id', (req, res, next) => {
    SlaveBot.findAll({
        where:{master : req.params.id}
    })
    .then((slaves)=>{
        console.log(slaves);
        res.json(slaves)
    })
    .catch((err)=>{
        console.log(err);
        next(err);
    })
})

router.post('/', (req, res, next)=>{
    SlaveBot.create({
        port:req.body.port,
        skin:req.body.skin,
        master:req.body.id,
    })
    .then((result)=>{
        console.log(result);
        res.status(201).json(result);
    })
    .catch((err)=>{
        console.log(err);
        next(err);
    })

})

router.delete('/:id', (req,res,next)=>{
    SlaveBot.destroy({where:{id:req.params.id}})
    .then((result)=>{
        res.json(result)
    })
    .catch((err)=>{
        console.error(err);
        next(err);
    });
});

module.exports = router;