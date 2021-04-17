import React, { useEffect, useState } from 'react';
import { helpHttp } from '../helpers/helpHttp';
import CrudForm from './crud/CrudForm';
import CrudTable from './crud/CrudTable';
import Loader from './generics/Loader';
import Message from './generics/Message';

function CrudApi() {
  const [dataBase, setDataBase] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let api = helpHttp();
  let url = 'http://localhost:5000/frameworks';

  useEffect(() => {
    setLoading(true);

    helpHttp()
      .get(url)
      .then((data) => {
        // When the data not have in the api data the property err, update the state
        if (!data.err) {
          setDataBase(data);
          setError(null);
        } else {
          setDataBase(null);
          setError(data);
        }

        setLoading(false);
      });
  }, [url]);

  const createData = (data) => {
    data.id = Date.now();

    let options = {
      body: data,
      headers: { 'content-type': 'application/json' },
    };

    api.post(url, options).then((res) => {
      /* Note: the "response" should return an object, then to update the state, it have
       that set a array in state*/
      if (!res.err) {
        setDataBase([...dataBase, res]);
      } else {
        setError(res);
      }
    });
  };

  const updateData = (data) => {
    let endpoint = `${url}/${data.id}`;

    let options = {
      body: data,
      headers: { 'content-type': 'application/json' },
    };

    api.put(endpoint, options).then((res) => {
      if (!res.err) {
        let newData = dataBase.map((el) =>
          el.id === data.id ? data : el
        );

        setDataBase(newData);
      } else {
        setError(res);
      }
    });
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(`¿Estás seguro de eliminar? el registro
    con el id "${id}"`);

    if (isDelete) {
      let endpoint = `${url}/${id}`;

      let options = {
        headers: { 'content-type': 'application/json' },
      };

      api.del(endpoint, options).then((res) => {
        if (!res.err) {
          let newData = dataBase.filter(
            (item) => item.id !== id
          );

          setDataBase(newData);
        } else {
          setError(res);
        }
      });
    } else {
      return;
    }
  };

  return (
    <div>
      <h2>Crud Api</h2>

      <article className="grid-1-2">
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
          placeholderName={{
            name: 'framework',
            lang: 'language',
          }}
        />

        {loading && <Loader />}

        {error && (
          <Message
            msg={`Error ${error.status}:${error.statusText}`}
            bgColor={'#dc3545'}
          />
        )}

        {dataBase && (
          <CrudTable
            data={dataBase}
            setDataToEdit={setDataToEdit}
            deleteData={deleteData}
          />
        )}
      </article>
    </div>
  );
}

export default CrudApi;
