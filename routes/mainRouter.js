const express = require('express');
const {MasterBot, SlaveBot} = require('../models');

const router = express.Router();

router.get('/', async(req, res)=>{
    const DBMaster = await MasterBot.findAll();
    const DBSlave = await SlaveBot.findAll();

    console.log(DBMaster);
    console.log(DBSlave);

    for(var i in DBMaster){
        console.log(i + 'asd');
        
    }

    res.render('main', {DBMaster, DBSlave});
});

router.get('/getModules', async(req, res)=>{

});

module.exports = router; 