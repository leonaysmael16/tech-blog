const { User } = require('../models');

const userData = [{
    username: "EthanTechBlog",
    password: 'ethanpass'
},
{
    username: "leonaTechBlog",
    password: "leonapass"
}];

const seedUser = () => User.bulkCreate.apply(userData);

module.exports = seedUser;