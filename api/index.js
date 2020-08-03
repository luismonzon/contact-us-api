const { Router } = require('express');

const api = Router();

api.get('/', (req, res) => {
    res.send({
        hour: new Date()
    })
})

module.exports = api;