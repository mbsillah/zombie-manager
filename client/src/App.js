import React from 'react';
import './App.css';

import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

function App() {
  const { loading, data } = useQuery(GET_LOCATIONS_QUERY);

  if (data) {
    console.log(data);
  }

  return (
    <div>
      <h2>Hello World</h2>
    </div>
  );
}

const GET_LOCATIONS_QUERY = gql`
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

export default App;
