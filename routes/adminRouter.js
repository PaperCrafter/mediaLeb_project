const express = require('express');
const {MasterBot} = require('../models');
const router = express.Router();

router.get('/', async(req, res, err)=>{
    const DB = await MasterBot.findAll();

    //res.send(DB);
    console.log(DB);
    res.render('adminModule'), DB;
});

router.post('/register', async(req, res)=>{
    try{
        await MasterBot.create({
            name :req.name,
            ip : req.ip,
        });
        console.log('row created!');
        
    }catch(error){

        console.error(error);
        return next(error);
    }

});

router.get('/getList', async(req, res)=>{
    const DB = await MasterBot.findAll();

    res.send(DB);
});

module.exports = router;