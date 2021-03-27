import React, { useState } from 'react';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';

const initialBD = [
  {
    id: 1,
    name: 'Goku',
    race: 'saiyajin',
  },
  {
    id: 2,
    name: 'Vegeta',
    race: 'saiyajin',
  },
  {
    id: 3,
    name: 'Gohan',
    race: 'saiyajin',
  },
  {
    id: 4,
    name: 'Picoro',
    race: 'namekuseijin',
  },
  {
    id: 5,
    name: 'Bills',
    race: 'race de Beerus',
  },
  {
    id: 6,
    name: 'BlueDiU',
    race: 'Human',
  },
];

function CrudApp() {
  const [dataBase, setDataBase] = useState(initialBD);
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

  const deleteData = (id) => {};

  return (
    <div>
      <h2>Crud App</h2>

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
    </div>
  );
}

export default CrudApp;
