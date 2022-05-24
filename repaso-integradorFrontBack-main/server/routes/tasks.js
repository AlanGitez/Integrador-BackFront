const express = require("express");
const router = express.Router();
const Tasks = require("../models/Tasks");


router.get("/", (req, res, next) => {
    Tasks.findAll()
    .then(tasks => res.status(200).send(tasks))
    .catch(err => console.error(err));
})

module.exports = router;