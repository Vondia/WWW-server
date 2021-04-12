const express = require("express");
const auth = require("../auth/middleware");
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

router.post("/", auth, async (req, res) => {
  const { name, storySentence, preziUrl, imageUrl, question } = req.body;

  if (!name) {
    return res.status(400).send({ message: "A story must have a name" });
  }

  if (!storySentence) {
    return res
      .status(400)
      .send({ message: "A story must have an engaging sentance" });
  }

  if (!preziUrl) {
    return res.status(400).send({ message: "A story must have a prezi Url" });
  }

  if (!imageUrl) {
    return res.status(400).send({ message: "A story must have an image Url" });
  }

  if (!question) {
    return res.status(400).send({ message: "A story must have a question" });
  }

  const newStoryDone = await Story.create({
    name,
    storySentence,
    preziUrl,
    imageUrl,
    question,
  });

  return res.status(201).send({ message: "Story created", newStoryDone });
});

// router.post("/tasks", async (req, res) => {
//   const { name, status, doctorId, userId } = req.body;
//   if (!name || !userId) {
//     return res.status(400).send("Please try again");
//   }

//   try {
//     const newTask = await Task.create({
//       name,
//       userId,
//       doctorId,
//       status,
//     });
//     //   delete newUser.dataValues["password"]; // don't send back the password hash
//     //   const token = toJWT({ userId: newUser.id });
//     res.status(201).json({ ...newTask.dataValues });
//   } catch (error) {
//     if (error.name === "SequelizeUniqueConstraintError") {
//       return res.status(400).send({ message: "There is an error" });
//     }

//     return res.status(400).send({ message: "you added a task" });
//   }
// });

module.exports = router;
