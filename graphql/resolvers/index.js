const zombieResolvers = require('./zombies');
const locationResolvers = require('./locations');

module.exports = {
  Query: {
    ...zombieResolvers.Query,
    ...locationResolvers.Query,
  },
  Mutation: {
    ...locationResolvers.Mutation
  }
};
