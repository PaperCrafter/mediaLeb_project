const express = require('express');
const {MasterBot} = require('../models');
const router = express.Router();

router.get('/', async(req, res, err)=>{
    const DB = await MasterBot.findAll();

    console.log(DB);

    res.render('adminModule',{DB});
});

router.post('/register', async(req, res, next)=>{
    try{
        console.log(req.body);
        try{
            //정해진 시간 해당 모듈에 연결
        }catch(error){
            //실패할 경우 
        }

        await MasterBot.create({
            name :req.body.name,
            ip : req.body.ip,
        });

        res.status(201);
        res.send();
    }catch(error){
        console.error(error);
        return next(error);
    }
});

router.get('/getList', async(req, res)=>{
    const DB = await MasterBot.findAll();
    //console.log(DB);
    //res.status(201);
    res.json(DB);
});

router.delete('/delete',async(req,res,next)=>{

    await MasterBot.destroy({where: {id: req.body.id}});
    const DB = await MasterBot.findAll();
    res.status(201);
    res.send();
    console.log();
});

module.exports = router;