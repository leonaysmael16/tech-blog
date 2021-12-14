const { Comment } = require('../models');

const commentData = [{
    body: "This is a tech comment",
    user_id: 1,
    post_id: 1 
},
{
    body: "This is another tech comment",
    user_id: 2,
    post_id: 2
}];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;