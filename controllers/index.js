const router = require('express').Router();
const homeRoutes = require('./home-routes');
const dashBoardRoutes = require('./dashBoard-routes');
const loginRoutes = require('./login-routes');
const signupRoutes = require('./signup-routes');

// '/', 'login' , 'login#', 'signup', 'dashboard'

router.use('/', homeRoutes);
router.use('/dashboard', dashBoardRoutes);
router.use('/login', loginRoutes);
router.use('/signup', signupRoutes);

module.exports = router;