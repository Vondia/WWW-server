const express = require("express");
const Story = require("../models").story;
const Answer = require("../models").answer;

const { Router } = express;

const router = new Router();

//GET an user by id
//OPEN AT THE BROWSER localhost:4000/user/id
router.get("/:storyId", async (req, res, next) => {
  try {
    const storyId = parseInt(req.params.storyId);
    const story = await Story.findByPk(storyId, { include: [Answer] });
    if (!story) {
      res.status(404).send("User not found");
    } else {
      res.send(story);
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
