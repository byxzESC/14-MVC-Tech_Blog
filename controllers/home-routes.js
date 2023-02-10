const router = require("express").Router();
const { User, Post, Comment } = require("../models");
// require model posts

router.get("/", async (rep, res) => {
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
    res.render("homepage", { posts, logged_in: req.session?.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/dashboard", async (req, res) => {
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

      res.render("homepage", { posts, logged_in: req.session.logged_in });

    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/login', (req, res) => {
    console.log('loggedIn in session', req.session.logged_in )
    if ( req.session.logged_in ) {
      res.redirect('/')
      return;
    }
    res.render('login');
  })

module.exports = router;