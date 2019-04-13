const express = require('express');

const router = express.Router();
const {model} = require('../models');

router.get('/call', async(req, res, next)=>{
    try{
        //ip값 추출
        let ipAdd = req.headers['x-forwarded-for'] ||  req.connection.remoteAddress;
        ipAdd = ipAdd.split(':');
        const ip = ipAdd[ipAdd.length-1];
        console.log(ip);


        try{
            const ipDb = await model.find({where:{ip:ip}});
            //db에 해당 ip 존재
            if(ipDb){
                res.send(ipDb);
            }
            //없을 경우
            else{
                await model.create({
                    ip : ip,
                    func :0,
                });
                console.log('row created!');
            }
        }catch(error){
            console.error(error);
            return next(error);
        }

        /*
        const responseJson = {
            'ip': ip,
            'function' : "temp" ,
        }

        res.send(responseJson);
        */

    }catch(err){
        
    }
});

router.post('/', (req, res, next)=>{
    
    req.body

})

module.exports = router;