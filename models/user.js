const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require("bcrypt");

class User extends Model {
    passwordCheck(loginPW) {
        return bcrypt.compareSync(loginPW, this.password);
    }
}

User.init