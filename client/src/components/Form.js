import React, { useState } from 'react';
import {
  GET_LOCATIONS_QUERY,
  ZOMBIE_LOCATION_MUTATION,
} from '../utils/graphql';
import { useMutation } from '@apollo/react-hooks';

function Form({ locations, locationId, zombieId }) {
  const [values, setObject] = useState({
    locationId,
    zombieId,
    newLocationId: locationId,
  });

  function onChange(e) {
    setObject({
      ...values,
      [e.target.name]: e.target.value,
    });
  }

  function onSubmit(e) {
    e.preventDefault();
    changeZombieLocation()
  }

  const [changeZombieLocation, { error }] = useMutation(
    ZOMBIE_LOCATION_MUTATION,
    {
      variables: values,
      update(proxy, result) {
        console.log(result);
        // const data = proxy.readQuery({
        //    query: GET_LOCATIONS_QUERY
        // });
        // data.getPosts = [...]
      },
    }
  );

  return (
    <form onSubmit={onSubmit}>
      <select
        name="newLocationId"
        value={values.newLocationId}
        onChange={onChange}
      >
        {locations.map((locale) => (
          <option key={locale.id} value={locale.id}>
            {locale.name}
          </option>
        ))}
      </select>
      <button disabled={values.newLocationId === locationId}>Submit</button>
    </form>
  );
}

//mutation to saveZombie location

export default Form;
