import React, { useState } from 'react';
import Form from './Form';
import { Collapse } from 'react-collapse';

function Location({ location }) {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="locationContainer">
      <header className="locationTitle">
        <span>{location.name}</span>
        <span>Count: {location.zombies.length}</span>
      </header>
      <ul className="zombieList">
        {location.zombies.map((zombie) => (
          <React.Fragment>
            <li className="zombieContainer" key={zombie.id}>
              <span>{zombie.name}</span>
            </li>
            <Collapse isOpen={toggle}>
              <Form />
            </Collapse>
          </React.Fragment>
        ))}
        {/* <li className="zombieContainer">
          <span>Example1</span>
        </li>
        <li className="zombieContainer">
          <span>Example1</span>
        </li> */}
      </ul>
    </div>
  );
}

export default Location;
