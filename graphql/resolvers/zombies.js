const models = require('../../models');

module.exports = {
  Query: {
    async getZombies() {
      try {
        const zombies = await models.Zombie.find();
        return zombies;
      } catch (error) {
        throw new Error(error);
      }
    },
  },
  //Mutation to add Zombies
};
