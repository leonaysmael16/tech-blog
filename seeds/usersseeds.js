const { User } = require('../models');

const userData = [{
    username: "EthanTechBlog",
    password: 'ethanpass',
    email: 'ethan@email.com'
},
{
    username: "leonaTechBlog",
    password: "leonapass",
    email: 'leona@email.com'
}];

const seedUser = () => User.bulkCreate(userData, {
    individualHooks: true,
  });

module.exports = seedUser;