import React from 'react';
import { useForm } from '../hooks/useForm';

const initialForm = {
  name: '',
  email: '',
  subject: '',
  comments: '',
};

const validationsForm = (form) => {
  let errors = {};

  // regular expressions
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexComments = /^.{1,255}$/;

  //Validations
  if (!form.name.trim())
    errors.name = 'El campo "nombre" es requerido';
  else if (!regexName.test(form.name.trim()))
    errors.name =
      'El campo "nombre" solo acepta letras y espacio en blanco';

  if (!form.email.trim())
    errors.email = 'El campo "email" es requerido';
  else if (!regexEmail.test(form.email.trim()))
    errors.email = 'El campo "email" es incorrecto';

  if (!form.subject.trim())
    errors.subject = 'El campo "asunto a tratar" es requerido';

  if (!form.comments.trim())
    errors.comments = 'El campo "comentarios" es requerido';
  else if (!regexComments.test(form.comments.trim()))
    errors.comments =
      'El campo "comentarios" no debe ceder los 255 caracteres';

  return errors;
};

function ContactForm() {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);

  return (
    <div className="container">
      <h2>Formulario</h2>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Escribe tu nombre"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.name}
          required
          className="form-control"
        />
        {errors.name && (
          <p
            className="alert alert-danger ml-3"
            role="alert"
            style={{ width: '90%' }}
          >
            {errors.name}
          </p>
        )}

        <input
          type="email"
          name="email"
          placeholder="Escribe tu email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.email}
          required
          className="form-control"
          autoComplete="off"
        />

        {errors.email && (
          <p
            className="alert alert-danger ml-3"
            role="alert"
            style={{ width: '90%' }}
          >
            {errors.email}
          </p>
        )}

        <input
          type="text"
          name="subject"
          placeholder="Asunto a tratar"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.subject}
          required
          className="form-control"
          autoComplete="off"
        />

        {errors.subject && (
          <p
            className="alert alert-danger ml-3"
            role="alert"
            style={{ width: '90%' }}
          >
            {errors.subject}
          </p>
        )}

        <textarea
          name="comments"
          placeholder="Escribe tus comentarios"
          cols="50"
          rows="5"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.comments}
          required
          className="form-control mb-3"
        ></textarea>

        {errors.comments && (
          <p
            className="alert alert-danger ml-3"
            role="alert"
            style={{ width: '90%' }}
          >
            {errors.comments}
          </p>
        )}

        <input
          type="submit"
          value="Enviar"
          className="btn btn-outline-primary"
        />
      </form>
    </div>
  );
}

export default ContactForm;
