import React, { useState } from 'react';

import SelectList from './selects/SelectList';

function NestedSelects() {
  const [state, setState] = useState('');
  const [town, setTown] = useState('');
  const [suburb, setSuburb] = useState('');

  const TOKEN = 'd81a7ac7-976d-4e1e-b7d3-b1979d791b6c';

  return (
    <div className="container">
      <h3>México</h3>

      <SelectList
        title="estado"
        url={`https://api-sepomex.hckdrk.mx/query/get_estados?token=${TOKEN}`}
        handleChange={(e) => {
          setState(e.target.value);
        }}
      />

      {state && (
        <SelectList
          title="municipios"
          url={`https://api-sepomex.hckdrk.mx/query/get_municipio_por_estado/${state}?token=${TOKEN}`}
          handleChange={(e) => {
            setTown(e.target.value);
          }}
        />
      )}

      {town && (
        <SelectList
          title="colonia"
          url={`https://api-sepomex.hckdrk.mx/query/get_colonia_por_municipio/${town}?token=${TOKEN}`}
          handleChange={(e) => {
            setSuburb(e.target.value);
          }}
        />
      )}

      {state ? (
        <div>
          <h5>Haz escogido</h5>
          <p>{state}</p>
          <p>{town}</p>
          <p>{suburb}</p>
        </div>
      ) : (
        <h5>No hay nada seleccionado</h5>
      )}
    </div>
  );
}

export default NestedSelects;
