const express = require('express');
const router = express.Router();

router.get('/one', (req, res) => {
    res.status(200).send('This is response from api one');
});

router.get('/two', (req, res) => {
    res.status(200).send('This is response from api two');
});

router.get('/three', (req, res) => {
    res.status(200).send('This is response from api three');
});

router.get('/four', (req, res) => {
    res.status(200).send('This is response from api four');
});

module.exports = router;