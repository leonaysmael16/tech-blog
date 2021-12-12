const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require("bcrypt");

class User extends Model {
    passwordCheck(loginPW) {
        return bcrypt.compareSync(loginPW, this.password);
    }
}

User.init(
    {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    }
},
{
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    }
},
{
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { isEmail: true },
        unique: true,
    }
},
{
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { len: [5] },
    },
},
{
    
}
)