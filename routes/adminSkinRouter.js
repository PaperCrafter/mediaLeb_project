const express = require('express');
const {Skin} = require('../models');
const router = express.Router();

router.get('/', async(req, res)=>{
    const DB = await Skin.findAll();
    
    //db에 아무것도 없을 경우 디폴트 모듈 4개를 생성
    if(DB.count == 0){
        let skinList = ['LED', 'Kinetic', 'Sensor', 'Lightning'];
        let functionList = ['on', 'move', 'detect', 'glow'];

        for(let i =0; i < skinList.length(); i++){
            await MasterBot.create({
                skin : skinList[i],
                func1 : functionList[i],
            });
        }

    }

    console.log(DB);

    res.render('adminSkin', {DB});
});

router.get('/getTypeOfSkin', async(req, res)=>{
    const DB = await Skin.findAll();
    
    //db에 아무것도 없을 경우 디폴트 모듈 4개를 생성
    if(DB.count == 0){
        let skinList = ['LED', 'Kinetic', 'Sensor', 'Lightning'];
        let functionList = ['on', 'move', 'detect', 'glow'];

        for(let i =0; i < skinList.length(); i++){
            await MasterBot.create({
                skin : skinList[i],
                func1 : functionList[i],
            });
        }
    }

    console.log(DB);
});


module.exports = router;