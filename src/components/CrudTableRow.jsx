import React from 'react';

function CrudTableRow({ el, setDataToEdit, deleteData }) {
  const { name, race, id } = el;

  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{race}</td>
        <td>
          <button onClick={() => setDataToEdit(el)}>
            Editar
          </button>
          <button onClick={() => deleteData(id)}>
            Eliminar
          </button>
        </td>
      </tr>
    </>
  );
}

export default CrudTableRow;
