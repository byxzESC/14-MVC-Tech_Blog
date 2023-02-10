const { Post } = require('../../models/Post');

const postData = [
    {
        title: 11,
        content: 'What idea do I have for project 2? no idea.',
        create_at: 01/22/2023,
        user_id: 1
    },
    {
        title: 31,
        content: 'What idea do I have for project 31? no idea.',
        create_at: 01/21/2023,
        user_id: 3
    },
    {
        title: 32,
        content: 'What idea do I have for project 32? no idea.',
        create_at: 01/20/2023,
        user_id: 3
    },
    {
        title: 12,
        content: 'What idea do I have for project 12? no idea.',
        create_at: 01/23/2023,
        user_id: 1
    },
    {
        title: 21,
        content: 'What idea do I have for project 21? no idea.',
        create_at: 01/24/2023,
        user_id: 2
    },
    {
        title: 33,
        content: 'What idea do I have for project 33? no idea.',
        create_at: 01/25/2023,
        user_id: 3
    },
    {
        title: 41,
        content: 'What idea do I have for project 41? no idea.',
        create_at: 01/26/2023,
        user_id: 4
    },
    {
        title: 51,
        content: 'What idea do I have for project 51? no idea.',
        create_at: '01/27/2023',
        user_id: '5'
    },
    {
        title: 61,
        content: 'What idea do I have for project 61? no idea.',
        create_at: 01/28/2023,
        user_id: 6
    }
]

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;
