const s = require("sequelize");
const db = require("../db");

class Tasks extends s.Model{};

Tasks.init({
    content:{
        type: s.TEXT,
        allowNull:false
    },
    isComplete:{
        type: s.BOOLEAN,
        defaultValue: false
    }
},{sequelize: db, modelName: "tasks"});

module.exports = Tasks;