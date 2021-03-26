import React from 'react';

function CrudTableRow({ el }) {
  const { name, race } = el;

  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{race}</td>
        <td>
          <button>Editar</button>
          <button>Eliminar</button>
        </td>
      </tr>
    </>
  );
}

export default CrudTableRow;
