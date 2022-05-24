const s = require("sequelize");
const db = require("../db");

class Users extends s.Model{};

Users.init({
    userName:{
        type: s.TEXT,
        allowNull: false,
    },
    password:{
        type: s.TEXT,
        allowNull:false
    },
    email: {
        type: s.TEXT,
        allowNull:false,
        validate:{
            isEmail:true
        }
    }
},{sequelize: db, modelName: "users"});

module.exports = Users;
