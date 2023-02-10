const sequelize = require('../config/connection');
const User = require('../models/User')
const Post = require('../models/Post')
const Comment = require('../models/Comment')
const userData = require('./userData.json')
const postData = require('./postData.json')
const commentData = require('./commentData.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  console.log('\n============= DATABASE SYNCED =============\n');

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  console.log('\n============= User Seeded =============\n');

  await Post.bulkCreate(postData)
  console.log('\n============= Post Seeded =============\n');

  await Comment.bulkCreate(commentData)
  console.log('\n============= Comment Seeded =============\n');

  process.exit(0);
};

seedDatabase();


// const seedUser = require('./userData');
// const seedPost = require('./postData');
// const seedComment = require('./commentData');

// const seedDatabase = async () => {
//   await sequelize.sync({ force: true });
//   console.log('\n============= DATABASE SYNCED =============\n');

//   await seedUser();
//   console.log('\n============= User Seeded =============\n');
//   await seedPost();
//   console.log('\n============= Post Seeded =============\n');
//   await seedComment();
//   console.log('\n============= Comment Seeded =============\n');

//   process.exit(0);
// };

// seedDatabase();