import React, { useState } from 'react';
import Form from './Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

function Location({ location, locations }) {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="locationContainer">
      <header className="locationTitle">
        <span>{location.name}</span>
        <span>Count: {location.zombies.length}</span>
      </header>
      <ul className="zombieList">
        {location.zombies.map((zombie) => (
          <React.Fragment key={zombie.id}>
            <li className="zombieContainer">
              <div>
                <span>{zombie.name}</span>
                <button onClick={() => setToggle(!toggle)}>
                  <FontAwesomeIcon icon={faEllipsisV} />
                </button>

                <Form
                  locations={locations}
                  locationId={location.id}
                  zombieId={zombie.id}
                />
              </div>
            </li>
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}

export default Location;
