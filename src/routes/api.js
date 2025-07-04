const express = require('express');
const router = express.Router();

router.get('/one', (req, res) => {
    res.status(200).send('This is response from api one');
});

router.get('/two', (req, res) => {
    res.status(200).send('This is response from api two');
});

module.exports = router;