const { gql } = require('apollo-server');

module.exports = gql`
  type Zombie {
    id: ID!
    name: String!
    actor: String!
  }

  type Location {
    id: ID!
    name: String!
    zombies: [Zombie]
  }

  type Query {
    getZombies: [Zombie]
    getLocations: [Location]
  }
`;
