const Users = require("./Users");
const Tasks = require("./Tasks");

Tasks.belongsTo(Users, {as: "author"});

module.exports = {Users, Tasks};
