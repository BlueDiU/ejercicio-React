import React, { useState, useEffect } from 'react';

const initialForm = {
  name: '',
  race: '',
  id: null,
};

function CrudForm() {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {};

  const handleSubmit = (e) => {};

  const handleReset = (e) => {};

  return (
    <>
      <h3>Agregar</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          value={form.name}
          name="name"
          placeholder="Nombre"
          autoComplete="off"
        />

        <input
          type="text"
          onChange={handleChange}
          value={form.race}
          name="race"
          placeholder="Raza"
        />

        <input type="submit" value="Enviar" />
        <input
          type="reset"
          value="Limpiar"
          onClick={handleReset}
        />
      </form>
    </>
  );
}

export default CrudForm;
