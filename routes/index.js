const express = require('express');

const router = express.Router();


router.post('/call', (req, res, next)=>{
    //db조회 후 ip 있으면 해당 정보를 다시 res로 쏘아줌
    //없으면 dp 등록
});

router.get('/', (req, res, next)=>{
    res.render('main', {
        //메인 페이지 랜더링
    });
})