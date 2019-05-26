const express = require('express');

const router = express.Router();
const {MasterBot} = require('../models');

router.get('/', async(req, res, next)=>{
    
    //try{
        //ip값 추출
        /*
        let ipAdd = req.headers['x-forwarded-for'] ||  req.connection.remoteAddress;
        ipAdd = ipAdd.split(':');
        const ip = ipAdd[ipAdd.length-1];
        console.log(ip);
        */
        /*
        try{
            const ipDb = await MasterBot.findAll({where:{'ip':ip}});
            //db에 해당 ip 존재시 db 정보 전송
            if(ipDb){
                console.log("res 전송!!");
                res.send(ipDb);
            }else{
                 //없을 경우 db를 만들어 줍니다
                await MasterBot.create({
                    ip : ip,
                    func :0,
                });
                console.log('row created!');
            }
            
        }catch(error){

            console.error(error);
            return next(error);
        }


    }catch(err){
    */    
    //}
    
    res.render();
});

router.post('/', async(req, res, next)=>{
    try{
        if(req.body.ip !== null){
            await MasterBot.create({
                ip : ip,
                func :0,
            });
            console.log('row created!');
        }
        else{

        }
    }
    catch(error){
        console.log("error");

    }

    req.body.ip

})

module.exports = router;