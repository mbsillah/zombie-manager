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
  Mutation: {
    async changeZombieLocation(_, { locationId, zombieId, newLocationId }) {
      try {
        const location = await models.Location.findById(locationId).populate(
          'zombies'
        );
        const newLocation = await models.Location.findById(
          newLocationId
        ).populate('zombies');

        location.zombies.pull(zombieId);
        newLocation.zombies.push(zombieId);

        await location.save();
        await newLocation.save();

        const locations = await models.Location.find().populate('zombies');

        return locations;
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};
