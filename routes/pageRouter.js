const express = require('express');
const {MasterBot} = require('../models');

const router = express.Router();

router.get('/', (req, res)=>{
    res.render('main');
});

module.exports = router;