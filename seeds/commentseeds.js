const { Comment } = require('../models');

const commentData = [{
    comment_text: "This is a tech comment",
    user_id: 1,
    post_is: 1 
},
{
    comment_text: "This is another tech comment",
    user_id: 2
}];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;