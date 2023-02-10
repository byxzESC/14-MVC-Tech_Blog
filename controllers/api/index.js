const router = require('express').Router();
const dashBoard = require('./post-routes');
const user = require('./user-routes');
const comment = require('./comment-routes');

router.use('/dashboard', dashBoard);
router.use('/user', user);
router.use('/comment', comment);

module.exports = router;