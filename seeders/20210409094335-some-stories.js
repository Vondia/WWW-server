"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "stories",
      [
        {
          name: "Sagrada Familia",
          storySentence: "Gaudi's life work",
          preziUrl: "https://prezi.com/p/_vjrnovaf7ch/embed/",
          imageUrl: "https://weekend.knack.be/medias/11274/5772435.jpg",
          question: "When is the Sagrada Familia scheduled to be finished?",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Vianden",
          storySentence: "The smallest 'kanton' from Luxembourg",
          preziUrl: "https://prezi.com/p/kr9wclafgov5/embed/",
          imageUrl:
            "https://www.visit-vianden.lu/media/cache/1071_resized_400_400_90_5d2c64e007a75_vianden_dan4174-hdrm_albd_hdfb.jpg",
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
