import React from 'react';
import './App.css';
import { useQuery } from '@apollo/react-hooks';
import { GET_LOCATIONS_QUERY } from './utils/graphql';
import Location from './components/Location';

function App() {
  const { loading, data } = useQuery(GET_LOCATIONS_QUERY);

  return (
    <div>
      <header className="title">zombie manager</header>
      <div className="listContainer">
        {/* Will be able to add new zombie <div>Add New Zombie</div> */}
        {loading ? (
          <div>Loading.....</div>
        ) : (
          data.getLocations &&
          data.getLocations.map((location) => (
            <Location locations={data.getLocations} key={location.id} location={location} />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
