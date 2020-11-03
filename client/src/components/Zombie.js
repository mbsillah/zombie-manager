import React, { useState } from 'react';
import Form from './Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Collapse } from '@material-ui/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Zombie({ zombie, locations, location }) {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="zombieTitleContainer">
      <div className="zombieNameContainer">
        <span>{zombie.name}</span>
        <button className="menuButton" onClick={() => setToggle(!toggle)}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>

      <Collapse in={toggle}>
        <Form
          locations={locations}
          locationId={location.id}
          zombieId={zombie.id}
        />
      </Collapse>
    </div>
  );
}

export default Zombie;
