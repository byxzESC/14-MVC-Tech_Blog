const router = require('express').Router();
const dashBoard = require('./dashBoard-routes');
const user = require('./user-routes');

router.use('/dashboard', dashBoard);
router.use('/login', user);

module.exports = router;