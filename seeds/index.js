const seedUser = require('./usersseeds');
const seedPost = require('./postseeds');
const seedComment = require('./commentseeds');

const sequelize = require('../config/connection');


const seedAll = async() => {
    await sequelize.sync({ force: true });
    await seedComment();
    await seedUser();
    await seedPost();
    

    process.exit(0);
}

seedAll();