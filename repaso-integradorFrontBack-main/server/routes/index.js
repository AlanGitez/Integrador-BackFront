const express = require("express");
const router = express.Router();

const users = require("./users");
const tasks = require("./tasks");

router.use("/tasks", tasks);
router.use("/users", users);

router.get("/", (req, res, next) => {
  res.send("api its working");
});

module.exports = router;
