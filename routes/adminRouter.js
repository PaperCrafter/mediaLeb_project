const express = require('express');
const {MasterBot} = require('../models');
const master = require('../arduino/arduino');
const router = express.Router();

//master 처리 관련
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
            skin:req.body.skin,
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

router.patch('/:id', async(req, res, next)=>{
    await MasterBot.update({
        skin:req.body.skin
    },{
        where:{id:req.body.id}
    }).then((result)=>{
        res.json(result);
    })
    .catch((err)=>{
        console.error(err);
        next(err);
    });
});

router.delete('/delete',async(req,res,next)=>{

    await MasterBot.destroy({where: {id: req.body.id}});
    res.status(201);
    res.send();
    console.log();
});




module.exports = router;