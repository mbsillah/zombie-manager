const models = require('../../models');

module.exports = {
  Query: {
    async getLocations() {
      try {
        const locations = await models.Location.find().populate('zombies');
        return locations;
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};
