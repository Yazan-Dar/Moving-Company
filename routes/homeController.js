const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/umzug/index', (req, res) => {
    res.render('umzug/index');
});

router.get('/dienstleistungen/index', (req, res) => {
    res.render('dienstleistungen/index');
});

module.exports = router;