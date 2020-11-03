import React from 'react';
import Zombie from './Zombie';
import { Paper } from '@material-ui/core';

function Location({ location, locations }) {
  return (
    <div className="locationContainer">
      <header className="locationTitle">
        <span>{location.name}</span>
        <span>Count: {location.zombies.length}</span>
      </header>
      <ul className="zombieList">
        {location.zombies.map((zombie) => (
          <li key={zombie.id} className="zombieContainer">
            <Zombie locations={locations} location={location} zombie={zombie} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Location;
