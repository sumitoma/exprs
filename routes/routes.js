const express = require('express');
const router = express.Router();

router.use((req, res, next)=>{
    console.log('router specific middleware');
    next();
    })
    .route('/router')
    .get((req, res)=>{
        res.send("get api from routes");
    });

module.exports = router;

