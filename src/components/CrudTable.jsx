import React from 'react';
import CrudTableRow from './CrudTableRow';

function CrudTable({ data }) {
  return (
    <div>
      <h3>Tabla de datos</h3>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Raza</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="3">Sin Datos</td>
            </tr>
          ) : (
            data.map((el) => (
              <CrudTableRow key={el.id} el={el} />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default CrudTable;