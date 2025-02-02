const express = require('express');
const router = express.Router();
const data = {};

router.route('/').get((req, res) => {
    res.json(data);
})

.post((req, res) => {
    data.push(req.body);
    res.json(data);
})

.delete((req, res) => {
    data.splice(0, data.length);
    res.json(data);
})

.put((req, res) => {
    data.push(req.body);
    res.json(data);
});

module.exports = route;
