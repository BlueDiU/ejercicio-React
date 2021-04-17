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
            className="btn btn-info"
          >
            Editar
          </button>
          <button
            onClick={() => deleteData(id)}
            className="btn btn-danger"
          >
            Eliminar
          </button>
        </td>
      </tr>
    </>
  );
}

export default CrudTableRow;
