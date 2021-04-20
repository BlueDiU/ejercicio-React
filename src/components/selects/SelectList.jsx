import React from 'react';

function SelectList({ title }) {
  return (
    <>
      <label htmlFor="selectInput" className="d-block text-left">
        {title}
      </label>

      <select
        className="form-control w-25 mb-3"
        name=""
        id="selectInput"
      >
        <option value="">---</option>
      </select>
    </>
  );
}

export default SelectList;
