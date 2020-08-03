const userRouter = require('express').Router();
const signin = require('../controllers/signin');

userRouter.post('/signin', signin)

userRouter.get('/', (req, res) => {
    res.send({
        name: 'Luis'
    });
})

module.exports = userRouter;