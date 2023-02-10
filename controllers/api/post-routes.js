const router = require("express").Router();
// require models
const { Post } = require("../../models");
const withAuth = require('../../utils/auth')

// three routes '/', 'dashboard/new', 'dashboard/edit/:id'

// dashboard/new            post
router.post("/", async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

// dashboard/edit/:id       update
router.put('/edit/:id', withAuth, async (req, res) => {
  try {
    const post = await Post.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    console.log(`post ${post}`);
    res.redirect('dashboard');
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;
