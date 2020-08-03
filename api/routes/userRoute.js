const router = require('express').Router();
const signin = require('../controllers/signin');

const userRouter = router();

userRouter.post('/signin', signin)

module.exports = userRouter;