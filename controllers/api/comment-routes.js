const router = require("express").Router();
const { Post, User, Comment } = require("../../models");
const withAuth = require('../../utils/auth')

router.post("/", withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

// dashboard/edit/:id       update
// router.put('/edit/:id', withAuth, async (req, res) => {
//   try {
//     const comment = await Comment.findByPk(req.params.id);
//   } catch (err) {
//     res.status(500).json(err)
//   }
// });

// // delete
// router.delete('')

module.exports = router;
