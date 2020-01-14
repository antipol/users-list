const express = require("express");

const usersData = require("./add-user");

const router = express.Router();



router.get("/", (req, res, next) => {
    const allUsers = usersData.users;
    res.render("users", {
        users: allUsers,
        pageTitle: "Users",
        path: "/"
    })
})

module.exports = router;