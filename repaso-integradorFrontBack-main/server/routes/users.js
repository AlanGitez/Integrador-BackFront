const express = require("express");
const router = express.Router();
const Users = require("../models/Users");

router.get("/", (req, res, next) => {
    Users.findAll()
    .then(users => res.status(200).send(users))
    .catch(err => console.error(err));
})

module.exports = router;
