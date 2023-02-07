const router = require('express').Router();
// require model posts

router.get('/', async (rep, res) => {
    try {

    } catch (err) {
        res.status(500).json(err);
    }
})