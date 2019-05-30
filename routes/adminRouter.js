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

        console.log('row created!');
        res.status(201);

    }catch(error){
        console.error(error);
        return next(error);
    }
});

router.get('/getList', async(req, res)=>{
    const DB = await MasterBot.findAll();
    console.log(DB);
    res.json(DB);
});

router.delete('/delete',async(req,res,next)=>{
    const DB = await MasterBot.destroy({where: {id: res.body.id}});
    res.status(201);
});

module.exports = router;