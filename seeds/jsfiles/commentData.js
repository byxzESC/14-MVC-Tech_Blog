const { Comment } = require('../../models/Comment')

const commentData = [
    {
        comment: 'destroy',
        created_at: 02/03/2023,
        user_id: 1
    },
    {
        comment: 'steal',
        created_at: 02/04/2023,
        user_id: 1
    },
    {
        comment: 'steam',
        created_at: 02/05/2023,
        user_id: 1
    },
    {
        comment: 'savage',
        created_at: 02/06/2023,
        user_id: 2
    },
    {
        comment: 'raw',
        created_at: 02/07/2023,
        user_id: 3
    },
    {
        comment: 'sound',
        created_at: 02/08/2023,
        user_id: 4
    },
    {
        comment: 'image',
        created_at: 02/02/2023,
        user_id: 5
    },
    {
        comment: 'imagine',
        created_at: 02/01/2023,
        user_id: 6
    },
    {
        comment: 'loud',
        created_at: 01/30/2023,
        user_id: 2
    }
]

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;
