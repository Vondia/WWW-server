"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "answers",
      [
        {
          storyId: 1,
          answer: "1989, 1995, 2028, nooit",
          correctAnswer: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          storyId: 2,
          answer: "1989, 1995, 2028, nooit",
          correctAnswer: true,
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
