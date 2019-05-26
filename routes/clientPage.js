const express = require('express');

const router = express.Router();
const {model} = require('../models');

router.post('/call', (req, res, next)=>{
    //db조회 후 ip 있으면 해당 정보를 다시 res로 쏘아줌
    //없으면 dp 등록
    console.log('iscalled!');
});

router.get('/', (req, res, next)=>{
    //res.sendFile('../views/index.html');
    //express.static(app.get('views') + 'index.html');
    let dir = __dirname;
    dir = dir-'routes';

    res.sendFile(dir + 'views/index.html');
    console.log('client page is called!');
});

module.exports = router;