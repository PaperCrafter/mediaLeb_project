const express = require('express');
const {MasterBot, SlaveBot} = require('../models');

const router = express.Router();
const io = require('../app');
const arduino = require('../arduino/arduino');

router.get('/', async(req, res)=>{

    const DBMaster = await MasterBot.findAll();
    const DBSlave = await SlaveBot.findAll();

    console.log(DBMaster);
    //console.log(DBSlave);

    for(var i =0;i<DBMaster.length; i++){
        console.log(global.io);
        const ardu = new arduino(DBMaster[i].ip, DBMaster[i].name, global.io);
        ardu.connect();
    }
    res.render('main', {DBMaster, DBSlave});
});

router.get('/getModules', async(req, res)=>{
    const DBMaster = await MasterBot.findAll();
    const DBSlave = await SlaveBot.findAll();

    res.send({DBMaster, DBSlave});
});

router.get('/getModule', async(req, res)=>{
    const DBJoinTbl = await MasterBot.findAll({
        include:[{
            model:DBSlave,
            order:'master'
        }],
        order:'id'
    });

    console.log(DBJoinTbl);

    for(var i in DBJoinTbl){
        console.log(i + 'asd');
    }

    res.send(DBJoinTbl);
});

module.exports = router; 