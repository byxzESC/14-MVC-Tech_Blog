const router = require('express').Router();
const dashBoard = require('./post-routes');
const users = require('./user-routes');
const comment = require('./comment-routes');

router.use('/dashboard', dashBoard);
router.use('/users', users);
router.use('/comment', comment);

module.exports = router;