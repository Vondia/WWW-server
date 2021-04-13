const express = require("express");
const auth = require("../auth/middleware");
const Story = require("../models").story;
const Answer = require("../models").answer;

const { Router } = express;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    console.log("Im getting all the stories");
    const stories = await Story.findAll({
      include: [Answer],
      order: [["createdAt", "ASC"]],
    });
    res.send(stories);
  } catch (e) {
    next(e);
  }
});

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

router.post("/", auth, async (req, res, next) => {
  try {
    const {
      name,
      storySentence,
      preziUrl,
      imageUrl,
      question,
      answer1,
      answer2,
      answer3,
      answer4,
      correctAnswer1,
      correctAnswer2,
      correctAnswer3,
      correctAnswer4,
    } = req.body;

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
      return res
        .status(400)
        .send({ message: "A story must have an image Url" });
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

    const newAnswer = await Answer.bulkCreate([
      {
        storyId: newStoryDone.id,
        answer: answer1,
        correctAnswer: correctAnswer1,
      },
      {
        storyId: newStoryDone.id,
        answer: answer2,
        correctAnswer: correctAnswer2,
      },
      {
        storyId: newStoryDone.id,
        answer: answer3,
        correctAnswer: correctAnswer3,
      },
      {
        storyId: newStoryDone.id,
        answer: answer4,
        correctAnswer: correctAnswer4,
      },
    ]);
    return res.status(201).send({
      message: "Story created",
      newStoryDone,
      newAnswer,
    });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
