import React, { useState } from 'react';
import { ZOMBIE_LOCATION_MUTATION } from '../utils/graphql';
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
    changeZombieLocation();
  }

  const [changeZombieLocation, { error }] = useMutation(
    ZOMBIE_LOCATION_MUTATION,
    {
      variables: values,
      update(_, result) {
        console.log(result);
      },
    }
  );

  return (
    <form className="formContainer" onSubmit={onSubmit}>
      <select
        style={{ width: '100%' }}
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
      <button
        style={{ marginLeft: '5px' }}
        variant="contained"
        color="primary"
        disabled={values.newLocationId === locationId}
      >
        Submit
      </button>
    </form>
  );
}

export default Form;
