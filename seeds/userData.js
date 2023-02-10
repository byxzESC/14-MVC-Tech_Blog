const { User } = require('../models/User');

const userData = [
    {
      username: 'Sal',
      password: 'password12345'
    },
    {
      username: 'Lernantino',
      password: 'password12345'
    },
    {
      username: 'Amiko',
      password: 'password12345'
    },
    {
      username: 'salo',
      password: 'password12345'
    },
    {
      username: 'salu',
      password: 'password12345'
    },
    {
      username: 'sali',
      password: 'password12345'
    }
  ];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
