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

  return (
    <div>
      <h2>Crud App</h2>

      <CrudForm />

      <CrudTable data={dataBase} />
    </div>
  );
}

export default CrudApp;
