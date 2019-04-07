const express = require('express');

const router = express.Router();
const {model} = require('../models');

router.post('/call', (req, res, next)=>{
    //db조회 후 ip 있으면 해당 정보를 다시 res로 쏘아줌
    //없으면 dp 등록
    console.log('iscalled!');
});

router.get('/call', (req, res, next)=>{
    try{
        let ipAdd = req.connection.remoteAddress;
        console.log(ipAdd);
        res.send(ipAdd);
        /*

        */
    }catch(err){
        

    }

    //db정보 조회 없으면 등록!
    //db조회 후 ip 있으면 해당 정보를 다시 res로 쏘아줌
    //없으면 dp 등록
    console.log('iscalled!');
});

router.get('/', (req, res, next)=>{
    res.render('main', {
        //메인 페이지 랜더링
    });
})

module.exports = router;