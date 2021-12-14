const { User } = require('../models');

const userData = [{
    username: "EthanTechBlog",
    password: 'ethanpass'
},
{
    username: "leonaTechBlog",
    password: "leonapass"
}];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;