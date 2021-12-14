const seedUser = require('./usersseeds');
const seedPost = require('./postseeds');
const seedComment = require('./commentseeds');

const sequelize = require('../config/connection');


const seedAll = async() => {
    await sequelize.synce({ force: true });
    await seedUser();
    await seedPost();
    await seedComment();

    process.exit(0);
}

seedAll();