"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "testuser",
          email: "test@test.com",
          password: bcrypt.hashSync("test1234", SALT_ROUNDS),
          accountBlocked: false,
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "dummy",
          email: "a@a.com",
          password: bcrypt.hashSync("a", SALT_ROUNDS),
          accountBlocked: false,
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Anja",
          email: "ad@min.com",
          password: bcrypt.hashSync("admin", SALT_ROUNDS),
          isAdmin: true,
          accountBlocked: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "blo@ck.com",
          email: "blo@ck.com",
          password: bcrypt.hashSync("block", SALT_ROUNDS),
          accountBlocked: true,
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "kind1",
          email: "a1@a.com",
          password: bcrypt.hashSync("a", SALT_ROUNDS),
          accountBlocked: false,
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kind2",
          email: "a2@a.com",
          password: bcrypt.hashSync("a", SALT_ROUNDS),
          accountBlocked: false,
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kind3",
          email: "a3@a.com",
          password: bcrypt.hashSync("a", SALT_ROUNDS),
          accountBlocked: false,
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Juf Anja",
          email: "wereldwijdeweetjes@gmail.com",
          password: bcrypt.hashSync("Wereldww58=", SALT_ROUNDS),
          accountBlocked: false,
          isAdmin: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
