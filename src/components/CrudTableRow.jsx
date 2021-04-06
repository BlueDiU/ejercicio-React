import React from 'react';

function CrudTableRow({ el, setDataToEdit, deleteData }) {
  const { name, race, id } = el;

  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{race}</td>
        <td>
          <button
            onClick={() => setDataToEdit(el)}
            className="edit"
          >
            Editar
          </button>
          <button
            onClick={() => deleteData(id)}
            className="delete"
          >
            Eliminar
          </button>
        </td>
      </tr>
    </>
  );
}

export default CrudTableRow;
