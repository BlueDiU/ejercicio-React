import React, { useState } from 'react';

const initialForm = {
  artist: '',
  song: '',
};

function SongForm({ handleSearch }) {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.artist || !form.song) {
      alert('Datos incompletos');
      return;
    }

    handleSearch(form);
    setForm(initialForm);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="container">
        <div className="form-group">
          <input
            type="text"
            name="artist"
            className="form-control"
            placeholder="Nombre del intérprete"
            onChange={handleChange}
            value={form.artist}
          />

          <input
            type="text"
            name="song"
            className="form-control"
            placeholder="Nombre de la canción"
            onChange={handleChange}
            value={form.song}
          />

          <input
            type="submit"
            value="Enviar"
            className="btn btn-primary"
          />
        </div>
      </form>
    </>
  );
}

export default SongForm;
