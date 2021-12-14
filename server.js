const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const path = require('path');
const helpers = require('./utils/helpers');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({ helpers });
const session = require('express-session');
const app = express();
const PORT = process.env.PORT || 3701;
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: 'Secret shh',
    resave: false,
    saveUninitilized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};




