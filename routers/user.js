const express = require("express");
const User = require("../models").user;

const { Router } = express;

const router = new Router();

// router.get("/", (request, response) => response.send("Welcome to user!"));

router.get("/", async (req, res, next) => {
  try {
    console.log("Im getting all the users");
    const users = await User.findAll({});
    res.send(users);
  } catch (e) {
    next(e);
  }
});

//GET an user by id
//OPEN AT THE BROWSER localhost:4000/user/id
router.get("/:userId", async (req, res) => {
  try {
    const userId = parseInt(req.params.userId);
    const user = await User.findByPk(userId, {});
    if (!user) {
      res.status(404).send("User not found");
    } else {
      res.send(user);
    }
  } catch (e) {
    next(e);
  }
});

//Update an user
//To change the status (tested in terminal by: http PUT :4000/users/1 name="RockStar")
router.put("/:userId", async (req, res, next) => {
  try {
    console.log("req.body testMAKESURETOSEETHIS:", req.body);
    const userId = parseInt(req.params.userId);
    const userUpdate = await User.findByPk(userId);
    if (!userUpdate) {
      res.status(404).send("User not (un)blocked");
    } else {
      // const updateUser = await userUpdate.update(req.body);
      const updateUser = await userUpdate.update({
        accountBlocked: !userUpdate.accountBlocked,
      });
      console.log("update User:", updateUser);
      res.json(updateUser);
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
