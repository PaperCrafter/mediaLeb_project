const express = require('express');
const {Skin} = require('../models');
const router = express.Router();

router.get('/', async(req, res)=>{
    const DB = await Skin.findAll();

    console.log(DB);

    res.render('howToUse', {DB});
})

module.exports = router;