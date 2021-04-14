"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "stories",
      [
        {
          name: "Vianden",
          storySentence: "Kasteel op een berg",
          preziUrl: "https://prezi.com/p/kr9wclafgov5/embed/",
          imageUrl:
            "https://www.visit-vianden.lu/media/cache/1071_resized_400_400_90_5d2c64e007a75_vianden_dan4174-hdrm_albd_hdfb.jpg",
          question: "Hoe kregen de graven van Luxemburg het kasteel in handen?",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Schaffhausen",
          storySentence: "Een wilde stad",
          preziUrl: "https://prezi.com/embed/-lbnk9fpokt5/",
          imageUrl:
            "https://www.suedkurier.de/storage/image/6/6/0/5/12945066_shift-966x593_1wmQuk_UzCUHG.jpg",
          question:
            "Hoeveel meter valt het water bij Schaffhausen naar beneden?",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sagrada Familia",
          storySentence: "Van appel tot gebouw",
          preziUrl: "https://prezi.com/p/_vjrnovaf7ch/embed/",
          imageUrl: "https://weekend.knack.be/medias/11274/5772435.jpg",
          question:
            "Gaudi wordt beschouwd als de grondlegger van de organische architectuur. Organische architectuur wil zeggen dat:",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Corsica",
          storySentence: "Kleine man grote daden.",
          preziUrl: "https://prezi.com/p/8sfqcr3mrb2y/embed/",
          imageUrl:
            "https://i.pinimg.com/originals/4d/6c/77/4d6c77cd607a3cf110966e0f7db26a5f.jpg",
          question:
            "“Iemand die zijn Waterloo vindt “ is een uitdrukking. Wat betekent dat?",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Het terracottaleger",
          storySentence: "Leger onder de grond",
          preziUrl: "https://prezi.com/p/3yd8udycls1r/embed/",
          imageUrl:
            "https://reisboulevard.nl/wp-content/uploads/2018/09/Chinese-terracottaleger-Qin-Shi-Huang.jpg",
          question: "Waar is het terracottaleger van gemaakt?",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Vianden",
          storySentence: "Kasteel op een berg",
          preziUrl: "https://prezi.com/p/kr9wclafgov5/embed/",
          imageUrl:
            "https://www.visit-vianden.lu/media/cache/1071_resized_400_400_90_5d2c64e007a75_vianden_dan4174-hdrm_albd_hdfb.jpg",
          question: "Hoe kregen de graven van Luxemburg het kasteel in handen?",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Schaffhausen",
          storySentence: "Een wilde stad",
          preziUrl: "https://prezi.com/embed/-lbnk9fpokt5/",
          imageUrl:
            "https://www.suedkurier.de/storage/image/6/6/0/5/12945066_shift-966x593_1wmQuk_UzCUHG.jpg",
          question:
            "Hoeveel meter valt het water bij Schaffhausen naar beneden?",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sagrada Familia",
          storySentence: "Van appel tot gebouw",
          preziUrl: "https://prezi.com/p/_vjrnovaf7ch/embed/",
          imageUrl: "https://weekend.knack.be/medias/11274/5772435.jpg",
          question:
            "Gaudi wordt beschouwd als de grondlegger van de organische architectuur. Organische architectuur wil zeggen dat:",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Corsica",
          storySentence: "Kleine man grote daden.",
          preziUrl: "https://prezi.com/p/8sfqcr3mrb2y/embed/",
          imageUrl:
            "https://i.pinimg.com/originals/4d/6c/77/4d6c77cd607a3cf110966e0f7db26a5f.jpg",
          question:
            "“Iemand die zijn Waterloo vindt “ is een uitdrukking. Wat betekent dat?",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Het terracottaleger",
          storySentence: "Leger onder de grond",
          preziUrl: "https://prezi.com/p/3yd8udycls1r/embed/",
          imageUrl:
            "https://reisboulevard.nl/wp-content/uploads/2018/09/Chinese-terracottaleger-Qin-Shi-Huang.jpg",
          question: "Waar is het terracottaleger van gemaakt?",
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
