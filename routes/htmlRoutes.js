const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/index/:userName/:password', (req, res) =>{
    res.sendFile(path.join(_dirname, '../views/index.html'));


});

router.post('db/models/schema', (req, res) =>{
    // post userName and password
})
module.exports = router;