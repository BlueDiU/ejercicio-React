import React, { useState, useEffect } from 'react';

const initialForm = {
  name: '',
  race: '',
  id: null,
};

function CrudForm({
  createData,
  updateData,
  dataToEdit,
  setDataToEdit,
}) {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.race) {
      alert('Datos incompletos');
      return;
    }

    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }

    handleReset();
  };

  const handleReset = () => {
    setForm(initialForm);
    setDataToEdit(null);
  };

  return (
    <div>
      <h3>{dataToEdit ? 'Editar' : 'Agregar'}</h3>
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
          autoComplete="off"
        />

        <input type="submit" value="Enviar" />
        <input
          type="reset"
          value="Limpiar"
          onClick={handleReset}
        />
      </form>
    </div>
  );
}

export default CrudForm;
