import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import Loader from '../generics/Loader';
import Message from '../generics/Message';

function SelectList({ title, url, handleChange }) {
  const { data, error, loading } = useFetch(url);

  if (!data) return null;

  if (error) {
    <Message
      msg={`Error ${error.status}: ${error.statusText}`}
      bgColor="#CB4335"
    />;
  }

  let id = `select-${title}`;
  let label = title.charAt(0).toUpperCase() + title.slice(1);

  let options = data.response[title];

  return (
    <>
      <label htmlFor={id} className="d-block text-left">
        {label}
      </label>

      {loading && <Loader />}

      <select
        className="form-control mb-3"
        name={id}
        id={id}
        onChange={handleChange}
        style={{ cursor: 'pointer' }}
      >
        <option value="">Elige un {title}</option>
        {data &&
          options.map((el) => (
            <option key={el} value={el}>
              {el}
            </option>
          ))}
      </select>
    </>
  );
}

export default SelectList;
