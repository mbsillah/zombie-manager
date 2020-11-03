import gql from 'graphql-tag';

export const GET_LOCATIONS_QUERY = gql`
  {
    getLocations {
      id
      name
      zombies {
        id
        name
      }
    }
  }
`;

export const ZOMBIE_LOCATION_MUTATION = gql`
  mutation changeZombieLocation(
    $locationId: String!
    $zombieId: String!
    $newLocationId: String!
  ) {
    changeZombieLocation(
      locationId: $locationId
      zombieId: $zombieId
      newLocationId: $newLocationId
    ) {
      id
      name
      zombies {
        id
        name
      }
    }
  }
`;
