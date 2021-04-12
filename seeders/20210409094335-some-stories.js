"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "stories",
      [
        {
          name: "Sagrada Familia",
          storySentence: "Gaudi's life work",
          preziUrl: "https://prezi.com/p/kr9wclafgov5/embed/",
          imageUrl: "https://weekend.knack.be/medias/11274/5772435.jpg",
          question: "When is the Sagrada Familia scheduled to be finished?",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Vianden",
          storySentence: "The smallest 'kanton' from Luxembourg",
          preziUrl: "https://prezi.com/p/kr9wclafgov5/ww-1-vianden/",
          imageUrl:
            "https://castle-vianden.lu/wp-content/uploads/2020/04/ViandenCastle_autumm-1-von-1-scaled.jpg",
          question: "What is a 'kanton'?",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("stories", null, {});
  },
};
