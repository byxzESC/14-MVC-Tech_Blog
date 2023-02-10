const sequelize = require('../config/connection');

const seedUser = require('./userData');
const seedPost = require('./postData');
const seedComment = require('./commentData');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  console.log('\n============= DATABASE SYNCED =============\n');

  // await seedUser();
  // console.log('\n============= User Seeded =============\n');
  await seedPost();
  console.log('\n============= Post Seeded =============\n');
  await seedComment();
  console.log('\n============= Comment Seeded =============\n');

  process.exit(0);
};

seedDatabase();

  // const users = await User.bulkCreate(userData, {
  //   individualHooks: true,
  //   returning: true,
  // });

  // for (const post of postData) {
  //   await Post.create({
  //     ...post,
  //     user_id: users[Math.floor(Math.random() * users.length)].id,
  //   });
  // }