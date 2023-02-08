const router = require('express').Router();
const { User, Post} = require('../models');
// require model posts

router.get('/', async (rep, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });

        const posts = postData.map((post) => post.get({ plain: true }));
        res.render('homepage', { posts })
    } catch (err) {
        res.status(500).json(err);
    }
})

router.post('')