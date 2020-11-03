import React from 'react';
import './App.css';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import Location from './components/Location';

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

function App() {
  const { loading, data } = useQuery(GET_LOCATIONS_QUERY);

  return (
    <div>
      <header className="title">zombie manager</header>
      <div className="listContainer">
        {/* <div>Add New Zombie</div> */}
        {loading ? (
          <div>Loading.....</div>
        ) : (
          data.getLocations &&
          data.getLocations.map((location) => (
            <Location key={location.id} location={location} />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
