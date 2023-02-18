const router = require("express").Router();
const { User, Post, Comment } = require("../models");
const withAuth = require('../utils/auth');
// require model posts

router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ["username"],
        },
        {
          model: Comment,
        }
      ],
    });

    const posts = postData.map((post) => post.get({ plain: true }));
    posts.forEach((post) => {
      console.log(post)
      console.log(post.comments)
    });
    res.render('homepage', { posts, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/dashboard", withAuth, async (req, res) => {
    try {
      const postData = await Post.findAll({
        where: {
          user_id: req.session.user_id
        },
        include: [
          {
            model: User,
            attributes: ["username"],
          },
          {
            model: Comment,
            attributes: ["comment"]
          }
        ],
      });
  
      const posts = postData.map((post) => post.get({ plain: true }));

      res.render('dashBoard', { posts, logged_in: req.session.logged_in });

    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/login', (req, res) => {

    if ( req.session.logged_in ) {
      res.redirect('/')
      return;
    }
    res.render('login');
  })

module.exports = router;