import React, { useState } from 'react';
import Form from './Form';
import { Collapse } from 'react-collapse';

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
              <span>{zombie.name}</span>
            </li>
            {/* <Collapse isOpen={toggle}> */}
            <Form
              locations={locations}
              locationId={location.id}
              zombieId={zombie.id}
            />
            {/* </Collapse> */}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}

export default Location;
