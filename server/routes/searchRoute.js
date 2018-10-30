const express = require('express');
const router = express.Router();


// Return current active user maybe
router.get('/',function(req,res) {
    res.send('GET /search');
})

// Take in queries and perform search here
router.post('/',function(req,res) {
    res.send('POST /search');
})

module.exports = router;