"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "answers",
      [
        {
          storyId: 1,
          answer: "2026",
          correctAnswer: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          storyId: 1,
          answer: "never",
          correctAnswer: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          storyId: 1,
          answer: "2021",
          correctAnswer: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          storyId: 1,
          answer: "2022",
          correctAnswer: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("answers", null, {});
  },
};
