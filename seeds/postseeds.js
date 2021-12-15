const { Post } = require('../models');

const postData = [{
    title: "Tech Blog Title 1",
    body: 'Tech Blog Random First Tech Blog Post',
    user_id: 1
},
{
    title: "Tech Blog Title 2",
    body: "Tech Blog Random Post on Tech Blog",
    user_id: 2
}
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;