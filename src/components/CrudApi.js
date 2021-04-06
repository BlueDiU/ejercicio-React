import React, { useState } from 'react';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';

function CrudApi() {
  const [dataBase, setDataBase] = useState([]);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => {
    data.id = Date.now();

    setDataBase([...dataBase, data]);
  };

  const updateData = (data) => {
    let newData = dataBase.map((el) =>
      el.id === data.id ? data : el
    );

    setDataBase(newData);
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(`¿Estás seguro de eliminar? el registro
    con el id "${id}"`);

    if (isDelete) {
      let newData = dataBase.filter((item) => item.id !== id);

      setDataBase(newData);
    } else {
      return;
    }
  };

  return (
    <div>
      <h2>Crud App</h2>

      <article className="grid-1-2">
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />

        <CrudTable
          data={dataBase}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
        />
      </article>
    </div>
  );
}

export default CrudApi;
